import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // This prevents switching to another port
    host: true, // Allows external access
    allowedHosts: [
      'b90de48e48fe300eee2fb5f8f0201069.serveo.net',
      '.serveo.net'
    ]
  }
})