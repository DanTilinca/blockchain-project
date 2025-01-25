import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@mysten/sui.js': '@mysten/sui.js/dist/index.cjs',
    },
  },
});
