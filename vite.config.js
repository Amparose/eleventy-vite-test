import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  clearScreen: false,
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'css/[name].[hash].[ext]',
        chunkFileNames: 'js/[name].[hash].js',
      }
    }
  }
});
