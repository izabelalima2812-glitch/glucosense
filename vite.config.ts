import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Plugin opcional do Replit Cartographer
let cartographerPlugin = [];
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  import("@replit/vite-plugin-cartographer").then((m) => {
    cartographerPlugin = [m.cartographer()];
  });
}

// Configuração principal do Vite
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...cartographerPlugin,
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@shared": path.resolve("./shared"),
      "@assets": path.resolve("./attached_assets"),
    },
  },
  root: path.resolve("."),
  build: {
    outDir: path.resolve("dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
