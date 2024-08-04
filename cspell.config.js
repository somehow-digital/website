export default {
	import: ['@somehow-digital/cspell-dictionary'],
	language: 'en',
	version: '0.2',
	ignorePaths: ['**/build/', '**/styles/', '**/*.tsbuildinfo'],
	dictionaryDefinitions: [
		{
			name: 'project',
			path: './dictionary.txt',
			addWords: true,
		},
	],
	dictionaries: ['project'],
};
