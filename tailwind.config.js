/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/render.php"],
	theme: {
		extend: {
			colors: {
				"brand-primary": "#1626b8",
				"brand-primary-dark": "#0f1a8f",
				"brand-accent": "#ffa500",
				"surface-light": "#f5faff",
				"surface-lighter": "#e2f1ff",
				"border-light": "#e0e0e0",
				"text-primary": "#222",
				"text-secondary": "#444",
				"text-muted": "#666",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
};
