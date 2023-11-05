/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.svelte"],
	theme: {
		colors: {
			blue: "#3FBBF3",
			gray: "#72818c",
			red: "#E05F65",
			white: "#ffffff",
			dark: "#080C17",
			dark2: "#06111E",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1200px",
			},
		},
	},
	plugins: [],
};
