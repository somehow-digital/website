export default {
	entry: ['app/root.tsx'],
	project: ['app/**'],
	ignoreDependencies: [
		'@fontsource-variable/gabarito',
		'@remix-run/cloudflare-pages',
	],
};
