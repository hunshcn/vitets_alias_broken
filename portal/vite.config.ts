import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
console.log(path.resolve('src/'))
console.log(path.resolve(__dirname, 'src/'))
export default defineConfig({
  plugins: [vue()],
  base: '',
  resolve: {
    alias: {
      '@': path.resolve('src/'),
    }
  }
})
