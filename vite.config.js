// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase this value to suppress the warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-pdf')) {
            return 'pdf'; // Separate PDF-related code into its own chunk
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist'], // Ensure pdfjs-dist is included in dependencies optimization
  },
});
