import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import ThemeManager from "@/utils/ThemeManager";
import Colors from "@/constants/Colors.json";
import styles from "./QaMonitoringLayout.module.scss";

export default function MainLayout() {
  const theme = new ThemeManager();
  theme.themeState = "light";
  useEffect(() => {
    theme.loadColors(Colors);
    theme.applyColors();
  }, []);

  return (
    <div className={styles.qaMonitoringLayout}>
      <Outlet />
    </div>
  );
}
