import { css } from 'styles/css';

export const base = css({
	'--scale': 1.25,
	'alignItems': 'center',
	'display': 'flex',
	'flexDirection': 'row-reverse',
	'fontFamily': '"Gabarito", sans-serif',
	'fontSize': '2.5rem',
	'fontWeight': 450,
	'gap': '0.35em',
	'letterSpacing': '-0.025em',
	'lineHeight': '1em',
	'margin': 0,
	'position': 'relative',
	'visibility': 'hidden',
});

export const type = css({
	display: 'block',
	flexGrow: 0,
	flexShrink: 0,
	overflowX: 'clip',
	position: 'relative',
	top: '-0.09em',
});

export const phrase = css({
	display: 'block',
});

export const mark = css({
	alignItems: 'center',
	aspectRatio: '1',
	display: 'flex',
	flexDirection: 'row',
	flexGrow: 0,
	flexShrink: 0,
	gap: '0.05em',
});

export const bar = css({
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
	'backgroundColor': 'currentColor',
	'borderRadius': '0.025em',
	'display': 'block',
	'height': '100%',
	'margin': 0,

	'padding': 0,
	'transformOrigin': 'center bottom',
	'width': 'calc(0.25em * var(--scale))',
});
