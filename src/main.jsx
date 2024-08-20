import * as ReactDOM from "react-dom/client";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
// import { AppRouter } from "@/router/index";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import routes from "./router/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/questionnaire",
    element: <div>Hi questionnnaire</div>,
  },
  {
    path: "/reports",
    element: <div>Hi reports</div>,
  },
]);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <QueryProvider>
//     <AppRouter />
//     {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
//   </QueryProvider>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <RouterProvider router={router} />
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryProvider>
);
