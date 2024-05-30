import { defineConfig } from 'vite';
import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as proxy,
} from '@remix-run/dev';
import paths from 'vite-tsconfig-paths';

export default defineConfig({
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
