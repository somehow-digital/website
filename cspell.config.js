export default {
	version: '0.2',
	language: 'en',
	ignorePaths: [
		'node_modules',
		'build',
		'styles',
		'package.json',
		'pnpm-lock.yaml',
		'.gitignore',
		'tsconfig.tsbuildinfo',
	],
	dictionaries: [
		'en_US',
		'softwareTerms',
		'typescript',
		'node',
		'html',
		'css',
		'bash',
		'misc',
		'project',
	],
	dictionaryDefinitions: [
		{
			name: 'project',
			path: './dictionary.txt',
			addWords: true,
		},
	],
};
