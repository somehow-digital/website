import config from '@somehow-digital/eslint-config/typescript';

export default [
	...config,
	{
		ignores: ['**/.*/', 'build/', 'styles/', 'worker-configuration.d.ts'],
	},
];
