import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from 'vite-svg-loader'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    svgLoader()
  ],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src')
    }
}
})
