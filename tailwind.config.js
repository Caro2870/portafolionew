/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores principales
        primary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0087ff', // Color principal
          600: '#006cd1',
          700: '#0051a3',
          800: '#003675',
          900: '#001b47',
        },
        // Colores secundarios para acentos
        accent: {
          50: '#e6fff9',
          100: '#b3ffef',
          200: '#80ffe6',
          300: '#4dffdc',
          400: '#1affd2',
          500: '#00e6b8', // Color de acento
          600: '#00b392',
          700: '#00806d',
          800: '#004d41',
          900: '#001a16',
        },
        // Escala de grises personalizada
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Colores de fondo
        background: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        // Colores de texto
        text: {
          light: '#1e293b',
          dark: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.07), 0 20px 30px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

