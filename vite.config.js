import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bjmgales.github.io/',
  plugins: [react()],
  build: {
    assetsDir: 'src',
  }
})
