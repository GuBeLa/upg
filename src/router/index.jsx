import { Suspense, createElement } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CircularLoader from "@/components/CircularLoader";
import { RootError } from "@/components/error";
import BaseLayout from "@/layouts/BaseLayout";
import MainLayout from "@/layouts/QaMonitoringLayout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <Navigate to="/setup" replace />,
        path: "",
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
    ].map((el) => ({
      ...el,
      path: `${import.meta.env.VITE_APP_ROUTE_PREFIX + "/" + el.path}`,
    })),
  },
  {
    path: "",
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/setup" replace />,
        path: "",
      },
      {
        path: "/dashboard/questionnaire",
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
        path: "/dashboard/reports",
        lazy: () => import("@/pages/qamonitoring/Reports"),
      },
    ].map((el) => ({
      ...el,
      path: `${import.meta.env.VITE_APP_ROUTE_PREFIX + "/" + el.path}`,
    })),
  },
]);

console.log(router, "router");

export function Router() {
  return createElement(RouterProvider, { router });
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

// export function AppRouter() {
//   return (
//     <Suspense fallback={<CircularLoader absolutePosition={true} />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// }
