/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                128: '32rem',
                192: '48rem',
                256: '64rem',
                320: '80rem',
            },
        },
    },
    plugins: [],
};
