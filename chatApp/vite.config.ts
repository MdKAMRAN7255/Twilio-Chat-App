import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// import pluginChecker from "vite-plugin-checker";
export default defineConfig({
  plugins: [react()]
  // plugins: [react(), pluginChecker({ typescript: true })],
});
