import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  clearScreen: false,
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'css/main.[hash].css',
        chunkFileNames: 'js/[name].[hash].js',
      }
    }
  }
});
