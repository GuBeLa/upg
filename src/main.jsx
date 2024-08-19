import * as ReactDOM from "react-dom/client";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
import { AppRouter } from "@/router/index";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <AppRouter />
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryProvider>
);
