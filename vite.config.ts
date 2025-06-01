import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'entities': path.resolve(__dirname, './src/entities'),
      'features': path.resolve(__dirname, './src/features'),
      'pages': path.resolve(__dirname, './src/pages'),
      'shared': path.resolve(__dirname, './src/shared'),
      'store': path.resolve(__dirname, './src/store')
    }
  }
})