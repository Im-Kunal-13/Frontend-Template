/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./containers/**/*.{js,ts,jsx,tsx}",
        "./layout/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#050816",
                secondary: "#aaa6c3",
                tertiary: "#151030",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
                white1: "#C7D3FF",
                purple1: "#915EFF"
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
                lg1: "1024px",
            },
            backgroundImage: {
                "hero-pattern": "url('/images/herobg.png')",
            },
        },
    },
    plugins: [],
}
