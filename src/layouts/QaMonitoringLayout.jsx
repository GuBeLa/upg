import { Outlet } from "react-router-dom";

import styles from "./QaMonitoringLayout.module.scss";

export default function QaMonitoringLayout() {
  return (
    <div className={styles.qaMonitoringLayout}>
      <Outlet />
    </div>
  );
}
