import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { sitePath } from '../utils/paths';

export const GET: APIRoute = async ({ site }) => {
	if (!site) {
		throw new Error('Set SITE_URL to generate the RSS feed.');
	}

	const posts = await getCollection('blog', ({ data }) => !data.draft);

	return rss({
		title: `${SITE_TITLE} — Blog`,
		description: SITE_DESCRIPTION,
		site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: sitePath(`/blog/${post.id}/`),
		})),
	});
};
