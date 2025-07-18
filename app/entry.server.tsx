import type { EntryContext } from '@remix-run/cloudflare';

import { RemixServer } from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToReadableStream } from 'react-dom/server';

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
): Promise<Response> {
	const body = await renderToReadableStream(<RemixServer context={remixContext} url={request.url} />, {
		onError(error: unknown) {
			console.error(error);
			responseStatusCode = 500;
		},
		signal: request.signal,
	});

	if (isbot(request.headers.get('user-agent') || '')) {
		await body.allReady;
	}

	responseHeaders.set('Content-Type', 'text/html');

	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
}
