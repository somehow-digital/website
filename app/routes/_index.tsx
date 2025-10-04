import type { MetaFunction } from '@remix-run/cloudflare';
import type { JSX } from 'react/jsx-runtime';
import { Logo } from '~/components/logo';

export const meta: MetaFunction = () => {
	return [{ title: 'somehow digital.' }, { content: 'somehow digital.', name: 'description' }];
};

export default function Index(): JSX.Element {
	return <Logo />;
}
