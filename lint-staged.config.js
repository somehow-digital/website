export default {
	'**/*.{js,jsx,ts,tsx}': ['eslint'],
	'**/*.{md,json,yml,yaml}': ['prettier --check'],
	'**/*.*': ['cspell --no-progress --no-summary --no-must-find-files'],
};
