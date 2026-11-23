import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'**/*.*': [
			[
				'eslint',
				'cspell --no-progress --no-summary --no-must-find-files',
			],
		],
	},
});
