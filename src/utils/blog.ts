export const readingTime = (body: string) => {
	const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(wordCount / 220));
	return `${minutes} min read`;
};

export const tagSlug = (tag: string) =>
	tag
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
