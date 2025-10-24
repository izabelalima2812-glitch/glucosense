import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Configuração do Vite
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Removido await import para evitar erro de sintaxe
    // Se precisar do Cartographer no Replit, podemos adicionar depois de forma async
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
