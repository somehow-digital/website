import antfu from '@antfu/eslint-config';

export default antfu({
	formatters: {
		css: true,
		html: true,
		markdown: true,
		svg: true,
		xml: true,
	},
	imports: {
		overrides: {
			'perfectionist/sort-imports': [
				'error',
				{
					newlinesBetween: 0,
				},
			],
		},
	},
	stylistic: {
		indent: 'tab',
		semi: true,
	},
});
