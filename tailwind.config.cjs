/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                blue: '#2CBCE9',
                red: '#DC4492',
                yellow: '#FDCC49',
                grey: '#ededed',
                'deep-blue': '#010026',
                'dark-grey': '#757575',
                'opaque-black': 'rgba(0,0,0,0.35)',
            },
            backgroundImage: (theme) => ({
                'gradient-rainbow': 'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

                'gradient-rainblue': 'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
            }),
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                opensans: ['Open Sans', 'sans-serif'],
            },
            content: {
                brush: "url('./assets/brush.png')",
                person1: "url('./assets/person-1.png')",
                person2: "url('./assets/person-2.png')",
                person3: "url('./assets/person-3.png')",
            },
            screens: {
                xs: '480px',
                sm: '768px',
                md: '1060px',
            },
            animation: {
                slideup: 'slideup 1s ease-in-out',
                slidedown: 'slidedown 1s ease-in-out',
                slideleft: 'slideleft 1s ease-in-out',
                slideright: 'slideright 1s ease-in-out',
                wave: 'wave 1.2s linear infinite',
                slowfade: 'slowfade 2.2s ease-in-out',
                buttonSpin: 'spin 4s linear infinite',
                moveright: 'moveright 0.7s linear forwards',
                moveleft: 'moveleft 0.7s linear forwards',
            },
            keyframes: {
                slowfade: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                moveleft: {
                    from: { opacity: 0, transform: 'translateX(100%)' },
                    to: { opacity: 1, transform: 'none' },
                },
                moveright: {
                    from: { opacity: 0, transform: 'translateX(-100%)' },
                    to: { opacity: 1, transform: 'none' },
                },
                slideup: {
                    from: { opacity: 0, transform: 'translateY(25%)' },
                    to: { opacity: 1, transform: 'none' },
                },
                slidedown: {
                    from: { opacity: 0, transform: 'translateY(-25%)' },
                    to: { opacity: 1, transform: 'none' },
                },
                slideleft: {
                    from: { opacity: 0, transform: 'translateX(-20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                slideright: {
                    from: { opacity: 0, transform: 'translateX(20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                spin: {
                    form: { transform: 'roteta(-360deg)' },
                },
                wave: {
                    '0%': { transform: 'scale(0)' },
                    '50%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' },
                },
            },
        },
    },
};
