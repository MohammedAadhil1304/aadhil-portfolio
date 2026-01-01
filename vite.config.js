import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/aadhil-portfolio/", // ✅ MUST MATCH REPO NAME
});
