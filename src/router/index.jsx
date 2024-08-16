import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import QaMonitoringLayout from "@/layouts/QaMonitoringLayout";
import { RootError } from "@/components/error";
import CircularLoader from "@/components/CircularLoader";

export const router = createBrowserRouter([
  {
    path: "qamonitoring",
    element: <QaMonitoringLayout />,
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <Navigate to="/qamonitoring/questionnaire" replace />,
      },
      {
        path: "questionnaire",
        lazy: () => import("@/pages/qamonitoring/Questionnaire"),
      },
      {
        path: "setup",
        lazy: () => import("@/pages/qamonitoring/QuestionnaireSetup"),
      },
      { path: "review", lazy: () => import("@/pages/qamonitoring/Review") },
      { path: "reports", lazy: () => import("@/pages/qamonitoring/Reports") },
    ],
  },
]);
export function Router() {
  return (
    <Suspense fallback={<CircularLoader absolutePosition={true} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
