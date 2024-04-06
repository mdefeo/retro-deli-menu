import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground': 'rgb(var(--foreground-rgb))',
        'background-start': 'rgb(var(--background-start-rgb))',
        'background-end': 'rgb(var(--background-end-rgb))',
      },
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
        'six-caps': ['Six Caps', 'sans-serif'],
      },
      backgroundImage: {
        'whitenoise': "url('/img/whitenoise-361x370.png')",
      },
    },
  },
  plugins: [],
};
export default config;
