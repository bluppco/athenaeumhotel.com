/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			//backgroundImage and textShadow are the custom styles for background image and text shadow
			backgroundImage: { hero_image: "url('/images/hero-image.jpg')" },
			textShadow: {
				sm: "1px 1px 2px var(--tw-shadow-color)",
				DEFAULT: "2px 2px 4px var(--tw-shadow-color)",
				lg: "4px 4px 8px var(--tw-shadow-color)",
				xl: "4px 4px 16px var(--tw-shadow-color)",
			},
		},
	},
	plugins: [],
}
