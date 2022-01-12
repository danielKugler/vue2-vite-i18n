const path = require('path');
import { defineConfig } from 'vite';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import copy from 'rollup-plugin-copy'
import { createVuePlugin } from '@yfwz100/vite-plugin-vue2';
import { createI18nPlugin } from '@yfwz100/vite-plugin-vue2-i18n';

export default defineConfig({
	plugins: [
		createVuePlugin(),
		createI18nPlugin(),
		minifyHtml(),
		injectHtml({
			injectData: {
				title: 'bentimento',
				description: 'A single page application created using Vue.js',
			},
		}),
		copy({
			targets: [
				{ src: './src/locales', dest: 'dist/' }
			]
		  })
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	}
});
