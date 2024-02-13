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
        yes1: {
          'primary' : '#298EFF',
          'primary-focus' : '#BBBBBB',
          'primary-content' : '#201047',

          'secondary' : '#020C16',
          'secondary-focus' : '#88d7f7',
          'secondary-content' : '#201047',

          'accent' : '#3DB449',
          'accent-focus' : '#79A8D1',
          'accent-content' : '#201047',

          'neutral' : '#101F37',
          'neutral-focus' : '#140a2e',
          'neutral-content' : '#f9f7fd',

          'base-100' : '#0E151E',
          'base-200' : '#101F37',
          'base-300' : '#140a2e',
          'base-content' : '#f9f7fd',

          'info' : '#4fbff3',
          'success' : '#71ead2',
          'warning' : '#f3cc30',
          'error' : '#e13d53',

          // 'blue1' : '#101F37',
          // 'blue2' : '#0A1521',
          // 'blue4' : '#0E151E',
          // 'blue3' : '#79A8D1',
          // 'gray' : '#9DA7B2', 
          // 'green' : '#3DB449', 

          fontFamily: "Trade Gothic Display 1",
          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
       },
        gotham: {
          'primary' : '#b5860f',
          'primary-focus' : '#FFBD15',
          'primary-content' : '#ffffff',

          'secondary' : '#FFBD15',
          'secondary-focus' : '#8c680c',
          'secondary-content' : '#ffffff',

          'accent' : '#ffca44',
          'accent-focus' : '#e8ac13',
          'accent-content' : '#ffffff',

          'neutral' : '#2a2e37',
          'neutral-focus' : '#16181d',
          'neutral-content' : '#ffffff',

          'base-100' : '#101010',
          'base-200' : '#2a2e37',
          'base-300' : '#16181d',
          'base-content' : '#ebecf0',

          'info' : '#66c7ff',
          'success' : '#87cf3a',
          'warning' : '#e1d460',
          'error' : '#ff6b6b',
          fontFamily: "SF Compact, Nippo, Inter",

          '--rounded-box': '.1rem',          
          '--rounded-btn': '.125rem',        
          '--rounded-badge': '5rem',      
          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       
          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '2px',            
       },
      },
    ],
  },
  plugins: [require('daisyui')],
}
