import type { PageServerLoad } from './$types';
import type { BlogPost } from '$lib/blog';
import { estimateReadingTime } from '$lib/blog';

export const load: PageServerLoad = async () => {
	const postFiles = import.meta.glob('/blogs/*.md', { eager: true, query: '?raw', import: 'default' });
	const postModules = import.meta.glob('/blogs/*.md', { eager: true });

	const posts: BlogPost[] = [];

	for (const [path, rawContent] of Object.entries(postFiles)) {
		const slug = path.replace('/blogs/', '').replace('.md', '');
		const mod = postModules[path] as { metadata?: Record<string, unknown> };
		const metadata = mod?.metadata ?? {};

		if (metadata.published === false) continue;

		posts.push({
			slug,
			title: (metadata.title as string) ?? slug,
			description: (metadata.description as string) ?? '',
			date: (metadata.date as string) ?? '',
			cover: (metadata.cover as string) ?? '',
			tags: (metadata.tags as string[]) ?? [],
			readingTime: estimateReadingTime(rawContent as string),
			published: metadata.published !== false
		});
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
