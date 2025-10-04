import type { FunctionComponent } from 'react';
import { useEffect, useRef } from 'react';
import type { LogoAnimationReferences } from '~/components/logo.animation';
import { animation } from '~/components/logo.animation';
import * as styles from './logo.styles';

export const Logo: FunctionComponent = () => {
	const references: LogoAnimationReferences = {
		bars: useRef<HTMLElement[]>([]),
		base: useRef<HTMLHeadingElement>(null),
		dot: useRef<HTMLElement>(null),
		mark: useRef<HTMLElement>(null),
		type: useRef<HTMLElement[]>([]),
	};

	useEffect(() => {
		const controls = animation(references);
		return () => controls?.cancel();
	}, []);

	return (
		<h1 className={styles.base} ref={references.base}>
			<span className={styles.type}>
				<span
					className={styles.phrase}
					ref={(element) => {
						if (element && references.type.current) {
							references.type.current[0] = element;
						}
					}}
				>
					somehow
				</span>

				<span
					className={styles.phrase}
					ref={(element) => {
						if (element && references.type.current) {
							references.type.current[1] = element;
						}
					}}
				>
					digital
					<span ref={references.dot}>.</span>
				</span>
			</span>

			<span aria-hidden="true" className={styles.mark} ref={references.mark}>
				{[1, 2, 3, 4, 5].map((value, index) => {
					return (
						<span
							className={styles.bar}
							key={value}
							ref={(element) => {
								if (element && references.bars.current) {
									references.bars.current[index] = element;
								}
							}}
						>
						</span>
					);
				})}
			</span>
		</h1>
	);
};
