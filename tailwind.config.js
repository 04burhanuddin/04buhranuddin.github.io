const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            'sans': ['Heebo', ...defaultTheme.fontFamily.sans],
            'Silckscreen': 'Silkscreen, cursive',
        },
        colors: {
            'aqua': '#689D6A',
            'white': '#FBF1C7',
            'black': '#1D2021',
            'gray': '#EBDBB2',
            "red": '#CC241D',
            'orange': '#D65D0E',
            'blue': '#458588',
            'green': '#98971A',
            'yellow': '#D79921',
            'pink': '#ec4899',
            transparent: 'transparent',
            current: 'currentColor',
        },
        backgroundImage: {
            'hero-grid': "url('/assets/section/grid-dark.svg')",
            'hero-dotted': "url('/assets/section/dot.svg')"
        },
        // lineHeight : {
        //     'costume': '1.6rem',
        // }
    },
}
