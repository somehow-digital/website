import type { AnimationPlaybackControls } from 'motion';
import { animate, stagger } from 'motion';

export interface LogoAnimationElements {
	bars: HTMLElement[];
	base: HTMLElement;
	dot: HTMLElement | null;
	mark: HTMLElement | null;
	type: HTMLElement[];
}

export function animation(elements: LogoAnimationElements): AnimationPlaybackControls | undefined {
	const [first, second] = elements.type;

	if (!elements.bars.length || !elements.mark || !elements.dot || !first || !second) {
		return undefined;
	}

	return animate([
		[
			elements.base,
			{
				visibility: 'visible',
			},
			{
				duration: 0,
			},
		],
		[
			elements.bars,
			{
				opacity: [0, 1],
				scaleY: [2, 1],
				y: ['-25%', 0],
			},
			{
				delay: stagger(0.025, {
					ease: 'easeOut',
				}),
				duration: 0.25,
				ease: 'easeOut',
			},
		],
		[
			elements.mark,
			{
				x: ['50%', 0],
			},
			{
				at: 0.5,
				duration: 0.5,
				ease: 'easeInOut',
			},
		],
		[
			first,
			{
				opacity: [0, 1],
				x: ['-200%', 0],
			},
			{
				at: 0.5,
				duration: 0.5,
				ease: 'easeOut',
			},
		],
		[
			second,
			{
				opacity: [0, 1],
				x: ['-125%', 0],
			},
			{
				at: 0.5,
				duration: 0.5,
				ease: 'easeOut',
			},
		],
		[
			elements.dot,
			{
				opacity: [0, 1],
			},
			{
				at: 1.25,
				duration: 0.5,
				ease: 'easeOut',
			},
		],
	]);
}
