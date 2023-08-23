/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
    },
    extend: {
      colors: {
        '067': '#EC4067'
      },
      backgroundColor: {
        'section-1': 'rgba(208, 101, 80, 0.7);',
         '067': '#EC4067',
         'CB6': '#FAECB6',
         'FF3': '#FFEFF3',
         'CC7': '#B5DCC7',
         'CF0': '#C6DCF0',
      },
      backgroundImage: {
        'section-cover': "url('https://res.cloudinary.com/event-manager-2018/image/upload/v1691841697/cover.jpg')"
      }
    },
  },
  plugins: [],
}

