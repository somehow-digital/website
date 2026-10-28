import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import { voidPlugin } from 'void';

export default defineConfig({
	adapter: cloudflare({
		configPath: './.void-wrangler.jsonc',
		imageService: 'passthrough',
	}),
	base: '/',
	integrations: [
		unocss(),
		sitemap(),
	],
	output: 'static',
	session: false,
	site: 'https://somehow.digital/',
	trailingSlash: 'always',
	vite: {
		plugins: [voidPlugin()],
	},
});
