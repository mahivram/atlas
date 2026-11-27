const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const sitePath = (path: string) => `${basePath}/${path.replace(/^\/+/, '')}`;

export const stripBasePath = (pathname: string) => {
	if (!basePath) return pathname;
	if (pathname === basePath) return '/';
	return pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length) : pathname;
};
