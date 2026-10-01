import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Encaminha /api para o backend durante o desenvolvimento.
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
});
