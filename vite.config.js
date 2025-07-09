import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/venues': {
        target: 'https://venue-ninja.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
