import { RefObject } from 'react';
import { stagger, timeline } from 'motion';

export type LogoAnimationReferences = {
	base: RefObject<HTMLHeadingElement>;
	mark: RefObject<HTMLSpanElement>;
	type: RefObject<HTMLSpanElement[]>;
	bars: RefObject<HTMLSpanElement[]>;
	dot: RefObject<HTMLSpanElement>;
};

export const animation = (references: LogoAnimationReferences) => {
	return timeline([
		[
			references.base.current,
			{
				visibility: 'visible',
			},
			{
				duration: 0,
			},
		],
		[
			references.bars.current,
			{
				y: ['-25%', 0],
				opacity: [0, 1],
				scaleY: [2, 1],
			},
			{
				duration: 0.25,
				easing: 'ease-out',
				delay: stagger(0.025, {
					easing: 'ease-out',
				}),
			},
		],
		[
			references.mark.current,
			{
				x: ['50%', 0],
			},
			{
				at: 0.5,
				duration: 0.5,
				easing: 'ease-in-out',
			},
		],
		[
			references.type.current[0],
			{
				x: ['-200%', 0],
				opacity: [0, 1],
			},
			{
				at: 0.5,
				duration: 0.5,
				easing: 'ease-out',
			},
		],
		[
			references.type.current[1],
			{
				x: ['-125%', 0],
				opacity: [0, 1],
			},
			{
				at: 0.5,
				duration: 0.5,
				easing: 'ease-out',
			},
		],
		[
			references.dot.current,
			{
				opacity: [0, 1],
			},
			{
				at: 1.25,
				duration: 0.5,
				easing: 'ease-out',
			},
		],
	]);
};
