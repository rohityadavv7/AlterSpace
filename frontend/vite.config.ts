import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'require': undefined, // avoids "require is not defined"
  },
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'crypto'], // or whatever Node package is the problem
    }
  }
})
