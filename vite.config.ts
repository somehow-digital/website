import type { UserConfig } from 'vite';
import { cloudflareDevProxyVitePlugin as proxy, vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';

const config: UserConfig = defineConfig({
	plugins: [
		proxy(),
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
	],
});

export default config;
