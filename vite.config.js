import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Ensure React plugin is included
  server: {
    port: process.env.PORT || 5173,
    host: "0.0.0.0",
  },
});
