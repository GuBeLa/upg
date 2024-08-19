import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

import ThemeManager from "@/utils/ThemeManager";
import colorTokens from "@/constants/Colors.json";
import "@/styles/global.scss";

export default function BaseLayout() {
  console.log("APP ENV IN APP INSTANCE:", import.meta.env.VITE_APP_ENV);

  //console.log("APP ENV:", import.meta.env.VITE_APP_ENV);

  const location = useLocation();
  let navigate = useNavigate();

  const handleThemeMode = (mode) => {
    const themeManager = new ThemeManager(mode);
    themeManager.loadColors(colorTokens);
    themeManager.applyColors();
  };

  const handlePostMessageToParent = () => {
    const routeObj = {};
    const queryObj = {};

    if (location.search.length) {
      const cleanedString = location.search.substring(1);
      const keyValuePairs = cleanedString.split("&");
      keyValuePairs.forEach((pair) => {
        const [key, value] = pair.split("=");
        queryObj[key] = value.replace(/\+/g, " ");
      });
    }

    routeObj.query = queryObj;
    routeObj.path = location.pathname;
    try {
      window.parent.postMessage(
        {
          action: "navigationFromChild",
          value: routeObj,
        },

        "*"
      );
    } catch (e) {
      console.log("navigation From child error", e);
    }
  };

  useEffect(() => {
    handlePostMessageToParent();
  }, [location]);

  useEffect(() => {
    try {
      window.parent.postMessage(
        {
          action: "childProjectLoaded",
          value: "support child project loaded",
        },
        "*"
      );
    } catch (e) {
      console.log("Child Project not Loaded", e);
    }

    const handleOnParentMessage = (event) => {
      const { data } = event;
      switch (data.action) {
        case "navigation":
          const { url } = data.payload;
          try {
            window.parent.postMessage(
              {
                action: "childProjectCheck",
                value: url,
              },
              "*"
            );
          } catch (e) {
            console.log("childCheck error", e);
          }
          if (data.payload.query) {
            navigate({
              pathname: `${import.meta.env.VITE_APP_ROUTE_PREFIX}${url}`,
              search: createSearchParams({
                ...data.payload.query,
              }).toString(),
            });
          } else {
            navigate({
              pathname: `${import.meta.env.VITE_APP_ROUTE_PREFIX}${url}`,
              replace: true,
            });
          }
          break;
        case "settings":
          if (data.payload.theme === "dark") {
            handleThemeMode("dark");
          } else {
            handleThemeMode("light");
          }

          break;
        default:
      }
    };

    window.addEventListener("message", handleOnParentMessage);

    return () => {
      window.removeEventListener("message", handleOnParentMessage);
    };
  }, []);

  return <Outlet />;
}
