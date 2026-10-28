import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'**/*.{*,__eslint__}': 'eslint',
		'**/*.{*,__cspell__}': 'cspell --no-progress --no-summary --no-must-find-files',
	},
});
