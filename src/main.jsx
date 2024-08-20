import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
import { routes } from "@/router/index";
import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryProvider>
);
