// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/deykun-app/' : '/',  // важно!
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Переменные и миксины теперь импортируются явно через @use в каждом файле
        // additionalData удален, так как используется современный подход с @use
      },
    },
  },
});
