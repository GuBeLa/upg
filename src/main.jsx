import { createRoot } from "react-dom/client";
import { Router } from "@/router/index";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@/styles/global.scss";

const container = document.getElementById("root");
const root = createRoot(container);

console.log("APP ENV:", import.meta.env.VITE_APP_ENV);

root.render(
  <QueryProvider>
    <Router />
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryProvider>
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => root.unmount());
}
