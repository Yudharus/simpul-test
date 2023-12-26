/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue--primary": "#2F80ED",
        "black--primary": "#4F4F4F",
        "black--secondary": "#333",
        "black--tertiary": "#333333",
        "gray--primary": "#828282",
        "white--primary": "#E0E0E0",
        "white2--primary": "#F2F2F2",
        "white--tertiary": "#BDBDBD",
        "orange--indicator": "#F8B76B",
        "purple--indicator": "#8785FF",
        "red--indicator": "#EB5757",
        "yellow--indicator": "#F2C94C",
        "vanilla--chats": "#FCEED3",
        "orange--chats": "#E5A443",
        "purple--chats": "#EEDCFF",
        "purple2--chats": "#9B51E0",
        "green--chats": "#D2F2EA",
        "green2--chats": "#43B78D",
        "white--stickers": "#E9F3FF",
        "cream--stickers": "#FDCFA4",
        "vanilla--stickers": "#F9E9C3",
        "green--stickers": "#AFEBDB",
        "green2--stickers": "#CBF1C2",
        "purple--stickers": "#CFCEF9",
        "pink--stickers": "#F9E0FD",

      },
      fontFamily: {
        lato: ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [],
}

