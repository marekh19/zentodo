import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    VitePWA({
      manifest: {
        name: 'Zentodo',
        short_name: 'Zentodo',
        description: 'Installable todo app with zen mode.',
        start_url: '/',
        orientation: 'portrait',
        theme_color: '#EFEFEF',
        scope: '/',
        display: 'standalone',
        icons: [
          {
            src: 'pwa/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'pwa/icon-384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'pwa/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'pwa/icon-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable any',
          },
        ],
      },
    }),
  ],
})
