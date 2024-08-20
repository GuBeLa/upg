import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CircularLoader from "@/components/CircularLoader";
import QaMonitoringLayout from "@/layouts/QaMonitoringLayout";
import { RootError } from "@/components/error";
import BaseLayout from "@/layouts/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [
      {
        path: "qamonitoring",
        element: <QaMonitoringLayout />,
        children: [
          {
            index: true,
            path: "",
            element: (
              <Navigate
                to={`${
                  import.meta.env.VITE_APP_ROUTE_PREFIX
                }/qamonitoring/questionnaire`}
                replace
              />
            ),
          },
          {
            path: "questionnaire",
            lazy: () => import("@/pages/qamonitoring/Questionnaire"),
          },
          {
            path: "setup",
            lazy: () => import("@/pages/qamonitoring/QuestionnaireSetup"),
          },
          {
            path: "review",
            lazy: () => import("@/pages/qamonitoring/Review"),
          },
          {
            path: "reports",
            lazy: () => import("@/pages/qamonitoring/Reports"),
          },
        ],
      },
    ],
  },
]);

console.log(router, "ROUTES");

export function AppRouter() {
  return (
    <Suspense fallback={<CircularLoader absolutePosition={true} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
