import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true, // 设置服务启动时是否自动打开浏览器
    
    port: 5173, // 设置服务启动端口号
    host:'0.0.0.0'
  },
  build: {
    sourcemap: false, // 不生成 source map 
    terserOptions: { 
      compress: { // 打包时清除 console 和 debug 相关代码
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
