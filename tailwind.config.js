/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": { max: "1400px" },
				"xl": { max: "1280px" },
				"lg": { max: "1024px" },
				"md": { max: "768px" },
				"sm": { max: "640px" },
				"xs": { max: "577px" },
				"xxs": { max: "425px" },
				"xxxs": { max: "375px" }
			}
		},
		extend: {
			animation: {
				fadeIn: "fadeIn 0.5s ease-in forwards",
				fadeOut: "fadeOut 0.5s ease-out forwards"
			},
			colors: {
				primary: "#a41109",
				bgPrimary: "#f1e1e1",
				$secondary: "#a41109",
				$bgNavbar: "rgba(246, 232, 231, 0)",
				$linkedinPrimary: "rgb(0, 119, 181)",
				$pinterestPrimary: "rgb(230, 0, 35)",
				$instagramPrimary: "#E55D64",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				}
			},
			screens: {
				"2xl": { max: "1400px" },
				"xl": { max: "1280px" },
				"lg": { max: "1024px" },
				"md": { max: "768px" },
				"sm": { max: "640px" },
				"xs": { max: "577px" },
				"xxs": { max: "425px" },
				"xxxs": { max: "375px" }
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				},
				"fadeIn": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fadeOut": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" }
				},
				"slide-in": {
					"0%": { transform: "translateX(100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fadeIn": "fadeIn 0.5s ease-in forwards",
				"fadeOut": "fadeOut 0.5s ease-out forwards",
				"slide-in": "slide-in 0.5s ease forwards"
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
};