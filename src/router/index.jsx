import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CircularLoader from "@/components/CircularLoader";
import { RootError } from "@/components/error";
import BaseLayout from "@/layouts/BaseLayout";
import MainLayout from "@/layouts/QaMonitoringLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [
      {
        path: "qamonitoring",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: (
              <Navigate index={true} to="/qamonitoring/questionnaire" replace />
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
    ].map((el) => ({
      ...el,
      path: `${import.meta.env.VITE_APP_ROUTE_PREFIX + "/" + el.path}`,
    })),
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
