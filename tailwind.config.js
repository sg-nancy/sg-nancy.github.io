/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{html,js}",
        "./index.html",
        "./script.js"
    ],
    theme: {
        extend: {
            colors: {
                'normal': '#B2B6DA',
                'background': '#212033',

                'bleu': '#60d0cfb3',
                'rose': '#ff9cb4b3',
                'violet': '#d39cffb3',

                'card-background': '#b2b6da08',
                'card-border': '#b2b6da0f',

                // 30%
                'tag-bleu-border': '#60D0CF4D',
                'tag-rose-border': '#ff9cb499',
                'tag-violet-border': '#D39CFF4D',

                // 20%
                'tag-bleu-background': '#60D0CF33',
                'tag-rose-background': '#ff9cb433',
                'tag-violet-background': '#d39cff33',
            },
            screens: {
                mobile: "380px",
                pc: "1050px",
                pc_card: "990px"
            }
        }
    },
    plugins: [],
}
