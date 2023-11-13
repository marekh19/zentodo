import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
}

export default config
