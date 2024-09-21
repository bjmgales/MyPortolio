import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'src',

  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /\/$/, to: '/index.html' }, // Redirige les routes valides vers index.html
        { from: /./, to: '/404.html' }      // Redirige les routes invalides vers 404.html
      ]
    }
  }
})
