export default {
  publicDir: 'public',
  clearScreen: false,
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'css/main.[hash].css',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js'
      }
    }
  }
}
