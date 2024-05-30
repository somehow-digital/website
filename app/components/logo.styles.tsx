import { css } from 'styles/css';

export const base = css({
	'--scale': 1.25,
	'position': 'relative',
	'display': 'flex',
	'flexDirection': 'row-reverse',
	'alignItems': 'center',
	'gap': '0.35em',
	'margin': 0,
	'fontFamily': '"Gabarito", sans-serif',
	'fontWeight': 450,
	'fontSize': '2.5rem',
	'lineHeight': '0.9em',
	'letterSpacing': '-0.025em',
});

export const type = css({
	position: 'relative',
	top: '-0.09em',
	display: 'block',
	flexGrow: 0,
	flexShrink: 0,
});

export const mark = css({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	flexGrow: 0,
	flexShrink: 0,
	gap: '0.05em',
	aspectRatio: '1',
});

export const bar = css({
	'display': 'block',
	'margin': 0,
	'padding': 0,
	'width': 'calc(0.25em * var(--scale))',
	'height': '100%',
	'borderRadius': '0.025em',
	'backgroundColor': 'currentColor',

	'&:nth-child(1)': {
		alignSelf: 'flex-end',
		height: '80%',
	},
	'&:nth-child(3)': {
		alignSelf: 'flex-start',
		height: '80%',
	},
	'&:nth-child(5)': {
		height: '60%',
	},
});
