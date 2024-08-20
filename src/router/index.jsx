// eslint-disable-next-line no-restricted-imports
import { createBrowserRouter } from "react-router-dom";
import QaMonitoringLayout from "@/layouts/QaMonitoringLayout";

export const router = createBrowserRouter([
  {
    element: (
      <>
        <QaMonitoringLayout />
      </>
    ),
    children: [
      {
        path: "/",
        lazy: () => import("@/pages/qamonitoring/Questionnaire"),
      },
      {
        path: "/setup",
        lazy: () => import("@/pages/qamonitoring/QuestionnaireSetup"),
      },
      {
        path: "/review",
        lazy: () => import("@/pages/qamonitoring/Review"),
      },
      {
        path: "/products/:productId",
        lazy: () => import("@/pages/qamonitoring/Reports"),
      },
      {
        path: "/cart/:cartId",
        lazy: () => import("@/pages/qamonitoring/Reports"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <>
        <QaMonitoringLayout />
      </>
    ),
    children: [
      {
        path: "/dashboard",
        lazy: () => import("@/pages/qamonitoring/Questionnaire"),
      },
      {
        path: "/dashboard/setup",
        lazy: () => import("@/pages/qamonitoring/QuestionnaireSetup"),
      },
      {
        path: "/dashboard/review",
        lazy: () => import("@/pages/qamonitoring/Review"),
      },
      {
        path: "/dashboard/products/:productId",
        lazy: () => import("@/pages/qamonitoring/Reports"),
      },
      {
        path: "/dashboard/cart/:cartId",
        lazy: () => import("@/pages/qamonitoring/Reports"),
      },
    ],
  },
]);
