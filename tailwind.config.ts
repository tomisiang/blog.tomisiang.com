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
        appWhite: '#ECECEC',
        appBlue: '#32424F',
      },
      container: {
        screens: {
          sm: '640px',
        },
      },
    },
  },
  plugins: [],
}
export default config
