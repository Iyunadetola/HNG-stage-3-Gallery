import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/HNG-stage-3-Gallery/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-loader-spinner'],
    }
  }
})
