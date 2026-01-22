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
                lavender: '#EAE4E9',
                peach: '#FFF1E6',
                rose: '#FDE2E4',
                pink: '#FAD2E1',
                mint: '#E2ECE9',
                sky: '#BEE1E6',
                cream: '#F0EFEB',
                periwinkle: '#DFE7FD',
                blue: '#CDDAFD',
            },
        },
    },
    plugins: [],
};

export default config;
