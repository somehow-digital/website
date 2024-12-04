import type { RefObject } from 'react';

import { type AnimationControls, stagger, timeline } from 'motion';

export interface LogoAnimationReferences {
	bars: RefObject<HTMLElement[]>;
	base: RefObject<HTMLHeadingElement>;
	dot: RefObject<HTMLElement>;
	mark: RefObject<HTMLElement>;
	type: RefObject<HTMLElement[]>;
}

export const animation = (
	references: LogoAnimationReferences,
): AnimationControls | undefined => {
	return (
		(references.base.current &&
			references.bars.current &&
			references.mark.current &&
			references.dot.current &&
			references.type.current?.[0] &&
			references.type.current?.[1] &&
			timeline([
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
						opacity: [0, 1],
						scaleY: [2, 1],
						y: ['-25%', 0],
					},
					{
						delay: stagger(0.025, {
							easing: 'ease-out',
						}),
						duration: 0.25,
						easing: 'ease-out',
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
						opacity: [0, 1],
						x: ['-200%', 0],
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
						opacity: [0, 1],
						x: ['-125%', 0],
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
			])) ||
		undefined
	);
};
