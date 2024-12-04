import type { LinksFunction } from '@remix-run/cloudflare';
import type { ReactNode } from 'react';
import type { JSX } from 'react/jsx-runtime';

import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import styles from './index.css?url';

export const links: LinksFunction = () => [
	{ href: styles, rel: 'stylesheet' },
	{ href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
];

export default function App(): JSX.Element {
	return <Outlet />;
}

export function Layout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<Meta />
				<Links />
			</head>

			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
