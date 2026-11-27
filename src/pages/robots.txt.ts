import type { APIRoute } from 'astro';
import { sitePath } from '../utils/paths';

export const GET: APIRoute = ({ site }) => {
	const sitemapUrl = site ? new URL(sitePath('/sitemap-index.xml'), site) : null;

	return new Response(
		[
			'User-agent: *',
			'Allow: /',
			...(sitemapUrl ? [`Sitemap: ${sitemapUrl.href}`] : []),
			'',
		].join('\n'),
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
	);
};
