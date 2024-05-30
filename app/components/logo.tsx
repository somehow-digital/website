import { FunctionComponent } from 'react';
import * as styles from './logo.styles';

export const Logo: FunctionComponent = () => {
	return (
		<h1 className={styles.base}>
			<span className={styles.type}>
				somehow
				<br />
				digital.
			</span>

			<span className={styles.mark} aria-hidden="true">
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</span>
		</h1>
	);
};
