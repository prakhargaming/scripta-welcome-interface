// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         Outfit: ['Outfit', 'sans-serif'],
//        },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "button-text": "var(--button-text-font-family)",
        header: "var(--header-font-family)",
        heading: "var(--heading-font-family)",
      },
      backgroundImage: {
        'tech-background': "url('/background.png')",
        'logos': "url('/logos.png')",
        'waves-background': "url('/backgroundforInterviewInterface.png')",
      }
    },
  },
  plugins: [],
};