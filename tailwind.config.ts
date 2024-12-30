import containerQueries from '@tailwindcss/container-queries'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/**/fuma/dist/**/*.svelte',
  ],
  plugins: [typography, containerQueries, daisyui],
  theme: {
    extend: {},
  },
  daisyui: {
    logs: false,
    themes: ['autumn'],
  },
} satisfies Config
