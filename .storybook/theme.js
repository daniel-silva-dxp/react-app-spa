import { create } from '@storybook/theming';

export default create({
	base: 'light',

	colorSecondary: '#28F5BE',

	// UI
	appBg: '#fff',
	appContentBg: '#f8f8f8',
	appBorderColor: '#28F5BE',
	appBorderRadius: 3,

	// Typography
	fontBase: '"Roboto Mono", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: '#1e1e1e',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: '#e6e6e6',
	barSelectedColor: '#fff',
	barBg: '#1e1e1e',

	// Form colors
	inputBg: '#232323',
	inputBorder: '#28f5be',
	inputTextColor: '#1e1e1e',
	inputBorderRadius: 3,

	brandTitle: 'Daniel Silva',
	brandUrl: 'https://danielsilva-front.netlify.app/',
	brandImage: 'https://raw.githubusercontent.com/daniel-silva-dxp/danielsilva-dev/master/src/img/png/logo.png'
});
