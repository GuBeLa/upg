// import { Suspense } from "react";
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import CircularLoader from "@/components/CircularLoader";
// import QaMonitoringLayout from "@/layouts/QaMonitoringLayout";
// import { RootError } from "@/components/error";
// import BaseLayout from "@/layouts/BaseLayout";
import { Questionnaire } from "@/pages/qamonitoring/Questionnaire";
import { Reports } from "@/pages/qamonitoring/Reports";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <BaseLayout />,
//     errorElement: <RootError />,
//     children: [
//       {
//         path: "qamonitoring",
//         element: <QaMonitoringLayout />,
//         children: [
//           {
//             index: true,
//             element: <Navigate to="/qamonitoring/questionnaire" replace />,
//           },
//           {
//             path: "questionnaire",
//             lazy: () => import("@/pages/qamonitoring/Questionnaire"),
//           },
//           {
//             path: "setup",
//             lazy: () => import("@/pages/qamonitoring/QuestionnaireSetup"),
//           },
//           {
//             path: "review",
//             lazy: () => import("@/pages/qamonitoring/Review"),
//           },
//           {
//             path: "reports",
//             lazy: () => import("@/pages/qamonitoring/Reports"),
//           },
//         ],
//       },
//     ].map((el) => ({
//       ...el,
//       path: `${import.meta.env.VITE_APP_ROUTE_PREFIX + "/" + el.path}`,
//     })),
//   },
// ]);

const routes = [
  {
    path: "/questionnaire",
    element: <Questionnaire />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
];

export default routes;
// console.log(router, "ROUTES");

// export function AppRouter() {
//   return (
//     <Suspense fallback={<CircularLoader absolutePosition={true} />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// }
