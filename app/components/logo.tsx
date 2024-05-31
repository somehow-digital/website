import { FunctionComponent, useEffect, useRef } from 'react';
import {
	animation,
	LogoAnimationReferences,
} from '~/components/logo.animation';
import * as styles from './logo.styles';

export const Logo: FunctionComponent = () => {
	const references: LogoAnimationReferences = {
		base: useRef<HTMLHeadingElement>(null),
		mark: useRef<HTMLSpanElement>(null),
		type: useRef<HTMLSpanElement[]>([]),
		bars: useRef<HTMLSpanElement[]>([]),
		dot: useRef<HTMLSpanElement>(null),
	};

	useEffect(() => {
		animation(references);
	}, []);

	return (
		<h1 className={styles.base} ref={references.base}>
			<span className={styles.type}>
				<span
					className={styles.phrase}
					ref={(element) => {
						element &&
							references.type.current &&
							(references.type.current[0] = element);
					}}>
					somehow
				</span>

				<span
					className={styles.phrase}
					ref={(element) => {
						element &&
							references.type.current &&
							(references.type.current[1] = element);
					}}>
					digital<span ref={references.dot}>.</span>
				</span>
			</span>

			<span className={styles.mark} aria-hidden="true" ref={references.mark}>
				{[1, 2, 3, 4, 5].map((value, index) => {
					return (
						<span
							key={value}
							className={styles.bar}
							ref={(element) => {
								element &&
									references.bars.current &&
									(references.bars.current[index] = element);
							}}></span>
					);
				})}
			</span>
		</h1>
	);
};
