import { defineConfig } from 'astro/config';
import process from 'node:process';
import unocss from 'unocss/astro';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');

export default defineConfig({
	base: '/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		unocss(),
	],
	output: 'static',
	prefetch: {
		defaultStrategy: 'tap',
		prefetchAll: true,
	},
	site: env.APPLICATION_SITE,
	trailingSlash: 'never',
});
