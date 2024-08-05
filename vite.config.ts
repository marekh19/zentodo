import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import { fcmSwEnvPlugin } from './src/config/vitePlugins/fcmSwEnv'
import { pwaPlugin } from './src/config/vitePlugins/pwa'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [
        react(),
        tsconfigPaths(),
        svgr(),
        pwaPlugin(),
        fcmSwEnvPlugin(),
      ],
    }
  } else {
    // command === 'build'
    return {
      plugins: [react(), tsconfigPaths(), svgr(), pwaPlugin()],
      build: {
        rollupOptions: {
          input: {
            main: './index.html',
            'firebase-messaging-sw': './src/firebase-messaging-sw.js',
          },
          output: {
            entryFileNames: (chunkInfo) => {
              return chunkInfo.name === 'firebase-messaging-sw'
                ? '[name].js' // Output service worker in root
                : 'assets/[name]-[hash].js' // Others in `assets/`
            },
          },
        },
      },
    }
  }
})
