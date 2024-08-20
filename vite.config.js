import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/danny-portfolio/", // Ensure this matches your GitHub repository name
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist'
  }
})
