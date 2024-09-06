/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Figtree', 'sans-serif']
      },

      fontSize: {
        Preset1: '24px',
        Preset2: '16px',
        Preset3: '14px',
        Preset4: '12px',
        Preset5: '20px'
      },

      lineHeight: {
        customLineHeight: '150%'
      },

      letterSpacing: {
        customLetterSpace: '0px'
      },

      spacing: {
        '200': '16px',
        '150': '12px',
        '100': '8px',
        '50': '4px'
      },

      colors: {
        yellow: '#F4D04E',
        'gray-950': '#111111',
        'gray-500': '#6B6B6B'
      },
    },
  },
  plugins: [],
}

