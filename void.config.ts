import { defineConfig } from 'void/config';

export default defineConfig({
	cloudflare: {
		compatibility_date: '2026-10-19',
		compatibility_flags: ['nodejs_als'],
		name: 'somehow-digital-website',
		routes: [
			{ custom_domain: true, pattern: 'somehow.digital' },
			{ custom_domain: true, pattern: 'www.somehow.digital' },
			{ custom_domain: true, pattern: 'somehow-digital.com' },
			{ custom_domain: true, pattern: 'www.somehow-digital.com' },
		],
	},
	inference: {
		appType: 'static',
		build: 'pnpm build',
		outputDir: 'dist/client',
	},
});
