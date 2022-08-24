/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			padding: {
				168: '168px',
				224: '224px',
				108: '108px',
			},

			backgroundColor: {
				tranparentBlack: 'rgb(193, 184, 180,0.3)',
			},

			keyframes: {
				opacitySet: {
					'0%': { opacity: 0 },
					'50%': { opacity: 0.8 },
					'100%': { opacity: 1 },
				},

				opacitySetButton: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},

			width: {
				260: '290px',
			},

			height: {
				400: '400px',
			},

			animation: {
				opacitySet: 'opacitySet 1s ease-in-out',
				opacitySetButton: 'opacitySetButton 0.4s ease-in-out',
			},
		},
	},
	plugins: [],
};
