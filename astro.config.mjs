// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://mahivram.github.io';
// Use "/" for username.github.io repositories; set BASE_PATH="/repo-name" for project repositories.
const base = process.env.BASE_PATH ?? '/';

const grayscaleTheme = {
	name: 'atlas-grayscale',
	type: 'dark',
	colors: {
		'editor.background': '#262626',
		'editor.foreground': '#ffffff',
		'editorLineNumber.foreground': '#b3b3b3',
		'editorLineNumber.activeForeground': '#ffffff',
		'editor.selectionBackground': '#5e5e5e',
	},
	tokenColors: [
		{ scope: 'comment', settings: { foreground: '#b3b3b3', fontStyle: 'italic' } },
		{ scope: 'punctuation', settings: { foreground: '#b3b3b3' } },
		{ scope: ['keyword', 'storage'], settings: { foreground: '#ffffff', fontStyle: 'bold' } },
		{ scope: ['string', 'number', 'constant'], settings: { foreground: '#d4d4d4' } },
	],
};

export default defineConfig({
	site,
	base,
	integrations: [mdx(), sitemap(), icon(), pagefind()],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		shikiConfig: {
			theme: grayscaleTheme,
		},
	},
});
