import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { withZephyr } from "vite-plugin-zephyr"; // Add this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr()],
});
