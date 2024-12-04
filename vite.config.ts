import {
	cloudflareDevProxyVitePlugin as proxy,
	vitePlugin as remix,
} from '@remix-run/dev';
import { defineConfig, type UserConfig } from 'vite';
import paths from 'vite-tsconfig-paths';

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
		paths(),
	],
});

export default config;
