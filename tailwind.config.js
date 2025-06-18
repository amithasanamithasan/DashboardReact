/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui")
    ],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#1D0D57",
                    "secondary": "#f3f4f6",
                    "accent": "#3b82f6",
                    "neutral": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#f3f4f6",
                    "base-content": "#1f2937",
                },
                dark: {
                    "primary": "#6366f1",
                    "secondary": "#1f2937",
                    "accent": "#8b5cf6",
                    "neutral": "#374151",
                    "base-100": "#1f2937",
                    "base-200": "#111827",
                    "base-300": "#374151",
                    "base-content": "#f9fafb",
                },
            },
        ],
    },
} 