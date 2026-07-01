import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 소개 사이트 (정적 SPA). base './' 로 두어 빌드 산출물을 파일로 열어도 경로가 깨지지 않게 함.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5173, host: true, open: false },
  preview: { port: 4173, host: true },
})
