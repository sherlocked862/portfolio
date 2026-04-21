/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        apple: {
          blue: '#0071e3',
          purple: '#bf5af2',
          cyan: '#32ade6',
          dark: '#1d1d1f',
          card: '#161617',
          border: '#2d2d2f',
          gray: '#6e6e73',
          light: '#f5f5f7',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0071e3 0%, #bf5af2 50%, #32ade6 100%)',
      },
    },
  },
  plugins: [],
}