import { defineConfig } from 'vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve:{
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: []
})
