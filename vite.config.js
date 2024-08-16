import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "force-reload",
        handleHotUpdate({ server }) {
          server.ws.send({
            type: "full-reload",
          });
        },
      },
      federation({
        name: "app",
        filename: "remoteEntry.js",
        remotes: {
          masterComponentsLibrary2: env.VITE_APP_MASTER_COMPONENTS_URL,
        },
        shared: ["react", "react-dom"],
      }),
    ],
    build: {
      target: "ES2022",
    },
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@": path.resolve(__dirname, "./src"),
        // eslint-disable-next-line no-undef
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        // eslint-disable-next-line no-undef
        "@assets": path.resolve(__dirname, "./src/assets"),
        // eslint-disable-next-line no-undef
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
  };
});
