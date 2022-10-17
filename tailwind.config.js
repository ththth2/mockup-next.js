/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "index": "url('https://nextjs.org/_next/image?url=%2Fstatic%2Fconf-22%2Fprism-light-colorful.jpg&w=1080&q=100')",
      }),
      fontFamily: {
        'mono': ["Space Mono", "monospace"],
       },
    },
  },
  plugins: [],
};
