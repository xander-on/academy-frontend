import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
// import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      // "@shadcn": path.resolve(__dirname, "./src/modules/shared/libraries/shadcn"),
      "@shadcn": fileURLToPath(new URL('./src/modules/shared/libraries/shadcn', import.meta.url)),
    },
  },
})
