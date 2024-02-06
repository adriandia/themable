import theme from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'index.html', 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    fontFamily: {
      body: ["'DM Sans'", 'sans-serif'],
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...theme.light,
          primary: '#1b77ff',
          'primary-content': '#ffffff',
          secondary: '#494949',
          neutral: '#03131a',
          info: '#00e1ff',
          success: '#90ca27',
          warning: '#ff8800',
          error: '#ff7f7f',
          '--rounded-box': '0.25rem',
          '--rounded-btn': '0.25rem',
        },
        dark: {
          ...theme.dark,
          primary: '#1b77ff',
          'primary-content': '#ffffff',
          secondary: '#494949',
          neutral: '#03131a',
          info: '#00e1ff',
          success: '#90ca27',
          warning: '#ff8800',
          error: '#ff7f7f',
          'base-100': '#14181c',
          'base-200': '#1e2328',
          'base-300': '#28323c',
          'base-content': '#dcebfa',
          '--rounded-box': '0.25rem',
          '--rounded-btn': '0.25rem',
        },
        darkpink: {
          primary: '#ff00a0',
          secondary: '#00e500',
          accent: '#00e3ff',
          neutral: '#0f1514',
          'base-100': '#223131',
          info: '#00d7ff',
          success: '#00e68b',
          warning: '#eb8b00',
          error: '#cb002f',
          fontFamily: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem",

        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
