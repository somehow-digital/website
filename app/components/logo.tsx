import type { FunctionComponent } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import type { LogoAnimationReferences } from '~/components/logo.animation';
import { animation } from '~/components/logo.animation';
import * as styles from './logo.styles';

export const Logo: FunctionComponent = () => {
	const barsRef = useRef<HTMLElement[]>([]);
	const baseRef = useRef<HTMLHeadingElement>(null);
	const dotRef = useRef<HTMLElement>(null);
	const markRef = useRef<HTMLElement>(null);
	const typeRef = useRef<HTMLElement[]>([]);

	const references: LogoAnimationReferences = useMemo(() => ({
		bars: barsRef,
		base: baseRef,
		dot: dotRef,
		mark: markRef,
		type: typeRef,
	}), []);

	useEffect(() => {
		const controls = animation(references);
		return () => controls?.cancel();
	}, [references]);

	return (
		<h1 className={styles.base} ref={baseRef}>
			<span className={styles.type}>
				<span
					className={styles.phrase}
					ref={(element) => {
						if (element && typeRef.current) {
							typeRef.current[0] = element;
						}
					}}
				>
					somehow
				</span>

				<span
					className={styles.phrase}
					ref={(element) => {
						if (element && typeRef.current) {
							typeRef.current[1] = element;
						}
					}}
				>
					digital
					<span ref={dotRef}>.</span>
				</span>
			</span>

			<span aria-hidden="true" className={styles.mark} ref={markRef}>
				{[1, 2, 3, 4, 5].map((value, index) => {
					return (
						<span
							className={styles.bar}
							key={value}
							ref={(element) => {
								if (element && barsRef.current) {
									barsRef.current[index] = element;
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
