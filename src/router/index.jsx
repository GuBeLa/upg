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

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
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
]);

export function Router() {
  return createElement(RouterProvider, { router });
}

// export function AppRouter() {
//   return (
//     <Suspense fallback={<CircularLoader absolutePosition={true} />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// }
