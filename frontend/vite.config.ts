import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    }),
    tailwindcss(),
  ],
  build: {
    minify: false,
    rollupOptions: {
      external: ['fs', 'path', 'crypto'],
    },
  },
  resolve: {
    alias: {
      fs: 'false',
      path: 'false',
      crypto: 'false',
    }
  },  
  define: {
    global: 'window', // if a lib expects Node's `global`
  }
})
