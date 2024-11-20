import type { LinksFunction } from '@remix-run/cloudflare';

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

export default function App() {
	return <Outlet />;
}

export function Layout({ children }: { children: React.ReactNode }) {
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
