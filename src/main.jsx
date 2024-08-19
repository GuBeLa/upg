// src/main.jsx
import { createRoot } from "react-dom/client";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
import App from "./App.jsx";
import { AppRouter } from "@/router/index";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const container = document.getElementById("root");
const root = createRoot(container);
console.log("APP ENV:", import.meta.env.VITE_APP_ENV);

root.render(
  <QueryProvider>
    <AppRouter>
      <App />
    </AppRouter>
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryProvider>
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => root.unmount());
}
