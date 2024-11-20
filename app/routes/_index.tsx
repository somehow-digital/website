import type { MetaFunction } from '@remix-run/cloudflare';

import { Logo } from '~/components/logo';

export const meta: MetaFunction = () => {
	return [
		{ title: 'somehow digital.' },
		{ content: 'somehow digital.', name: 'description' },
	];
};

export default function Index() {
	return <Logo />;
}
