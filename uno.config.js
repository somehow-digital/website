import preset from '@thasmo/ui/preset';
import fonts from '@unocss/preset-web-fonts';
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [
		preset(),
		fonts({
			fonts: {
				sans: {
					name: 'Gabarito',
					weights: [400, 900],
				},
			},
			processors: createLocalFontProcessor({
				cacheDir: 'node_modules/.cache/unocss/fonts/',
				fontAssetsDir: 'public/assets/fonts/',
				fontServeBaseUrl: '/assets/fonts',
			}),
			provider: 'fontsource',
		}),
	],
});
