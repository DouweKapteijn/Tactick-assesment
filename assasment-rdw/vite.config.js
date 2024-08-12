import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
});
