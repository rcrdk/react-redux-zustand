/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				slideDown: 'slideDown 300ms ease-out',
				slideUp: 'slideUp 300ms ease-out',
			},
			keyframes: {
				slideDown: {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-collapsible-content-height)',
					},
				},
				slideUp: {
					from: {
						height: 'var(--radix-collapsible-content-height)',
					},
					to: {
						height: '',
					},
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
