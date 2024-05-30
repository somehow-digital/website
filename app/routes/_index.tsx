import type { MetaFunction } from '@remix-run/cloudflare';
import { Logo } from '~/components/logo';

export const meta: MetaFunction = () => {
	return [
		{ title: 'somehow digital.' },
		{ name: 'description', content: 'somehow digital.' },
	];
};

export default function Index() {
	return <Logo />;
}
