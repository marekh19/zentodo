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
        id: 'zentodo-marekh19',
        name: 'Zentodo',
        short_name: 'Zentodo',
        description: 'Installable todo app with zen mode.',
        start_url: '/',
        orientation: 'portrait',
        theme_color: '#242424',
        background_color: '#242424',
        scope: '/',
        display: 'standalone',
        categories: ['productivity'],
        dir: 'ltr',
        icons: [
          {
            src: 'pwa/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa/icon-384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'pwa/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa/icon-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'pwa/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'pwa/icon-384-maskable.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'pwa/icon-192-maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'pwa/icon-96-maskable.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: 'pwa/screenshot-wide.jpg',
            type: 'image/jpeg',
            sizes: '2880x1800',
            form_factor: 'wide',
          },
          {
            src: 'pwa/screenshot-mobile.jpg',
            type: 'image/jpeg',
            sizes: '1170x2532',
            form_factor: 'narrow',
          },
        ],
      },
    }),
  ],
})
