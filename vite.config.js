import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/aadhi-os-portfolio/", // 👈 EXACT repo name
});
