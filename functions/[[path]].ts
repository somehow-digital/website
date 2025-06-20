import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

import * as build from '../build/server';

export const onRequest: (context: EventContext<never, never, never>) => Promise<Response> = createPagesFunctionHandler({
	build,
} as never);
