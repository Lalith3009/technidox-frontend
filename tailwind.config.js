/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand
        brand: {
          DEFAULT: '#42389E',
          50: '#F6F6FA',
          100: '#EDEDF6',
          200: '#D9DAEC',
          300: '#B3B6D8',
          400: '#8E91C5',
          500: '#686DB1',
          600: '#42389E',
          700: '#353A7E',
          800: '#282B5F',
          900: '#1A1D3F'
        },
        // Accent yellow/orange
        accent: {
          DEFAULT: '#F9A71E',
          50: '#FDF5E9',
          100: '#FDF0E6'
        },
        // Success green
        success: {
          DEFAULT: '#24BD2E',
          50: '#EBFAED',
          100: '#EEFAEC'
        },
        // Error
        danger: {
          DEFAULT: '#DA1414',
          50: '#FCE8E8'
        },
        // Neutral text + bg
        ink: {
          DEFAULT: '#1A1A2E',
          900: '#0A0A0A',
          800: '#1B1B1C',
          700: '#272833',
          600: '#434345',
          500: '#5D5C5C',
          400: '#868585',
          300: '#AEADAD',
          200: '#D7D6D6',
          100: '#EBEBEB',
          50: '#F5F4F4'
        },
        surface: {
          DEFAULT: '#FDFDFF',
          soft: '#EAE9F5',
          lilac: '#E9E7FA',
          tint: '#F2F1FF'
        }
      },
      fontFamily: {
        // Display — headings
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Body — main reading font
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Footer/labels
        title: ['Sora', 'Inter', 'sans-serif'],
        // Eyebrow / small caps labels
        eyebrow: ['Montserrat', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, #E9E7FA 0%, #FDFDFF 100%)',
        'cta-gradient':
          'linear-gradient(90deg, #2C20A0 0%, #42389E 100%)',
        'enterprise-bg':
          'linear-gradient(110deg, rgba(66, 56, 158, 0.85) 0%, rgba(23, 20, 56, 0.95) 100%)'
      },
      boxShadow: {
        'card-soft': '0 0 20px 10px rgba(0, 0, 0, 0.05)',
        'cta':
          '0px 10px 15px -3px rgba(66, 56, 158, 0.2), 0px 4px 6px -4px rgba(66, 56, 158, 0.4)',
        'chip': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
      },
      maxWidth: {
        'container': '1680px'
      }
    }
  },
  plugins: []
}
