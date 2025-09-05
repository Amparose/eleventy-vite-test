import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  clearScreen: false,
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'img/[name].[hash].[ext]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'css/[name].[hash].[ext]';
          }
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name].[hash].[ext]';
        }
      }
    }
  }
});
