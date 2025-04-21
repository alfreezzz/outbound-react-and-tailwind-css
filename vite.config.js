import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/outbound-react-and-tailwind-css/',
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    include: ['@react-spring/web'], // atau exclude jika perlu
    exclude: ['some-problematic-lib'],
  },
})
