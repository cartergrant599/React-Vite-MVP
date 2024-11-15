/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#f9f9f9',
        success: '#4caf50',
        error: '#f44336',
      },
      borderRadius: {
        'lg': '8px',
      },
      boxShadow: {
        'custom': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

