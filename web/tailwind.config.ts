import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#dbeaff',
          200: '#b7d4ff',
          300: '#8fbbff',
          400: '#669dff',
          500: '#4b80ff',
          600: '#3b64db',
          700: '#2d4cb0',
          800: '#213783',
          900: '#18285f'
        }
      }
    }
  },
  plugins: []
}
export default config
