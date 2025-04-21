
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' && import.meta.env.VITE_GITHUB_PAGES
    ? '/Portofolio/'
    : '/',
  plugins: [react()],
}));

