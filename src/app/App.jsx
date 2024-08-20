// eslint-disable-next-line no-restricted-imports
import { router } from "@/router/index";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export { App };
