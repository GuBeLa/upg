import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "./router/index";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <QueryProvider>
      <Router />
    </QueryProvider>
  </StrictMode>
);
