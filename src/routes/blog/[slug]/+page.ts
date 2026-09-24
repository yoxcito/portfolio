import type { PageLoad } from './$types';
import { estimateReadingTime } from '$lib/blog';
import { error } from '@sveltejs/kit';
import GithubSlugger from 'github-slugger';

export interface TocItem {
	id: string;
	text: string;
	level: number;
}

function extractHeadings(markdown: string): TocItem[] {
	const slugger = new GithubSlugger();
	const headingRegex = /^(#{2,3})\s+(.+)$/gm;
	const headings: TocItem[] = [];
	let match;

	while ((match = headingRegex.exec(markdown)) !== null) {
		const level = match[1].length;
		const text = match[2].replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '').trim();
		const id = slugger.slug(text);
		headings.push({ id, text, level });
	}

	return headings;
}

export const load: PageLoad = async ({ params }) => {
	const postModules = import.meta.glob('/blogs/*.md', { eager: true });
	const rawModules = import.meta.glob('/blogs/*.md', {
		eager: true,
		query: '?raw',
		import: 'default'
	});

	const path = `/blogs/${params.slug}.md`;
	const mod = postModules[path] as
		| {
				default: ConstructorOfATypedSvelteComponent;
				metadata?: Record<string, unknown>;
			}
		| undefined;

	if (!mod) {
		error(404, `Post not found: ${params.slug}`);
	}

	const rawContent = rawModules[path] as string;
	const metadata = mod.metadata ?? {};
	const headings = extractHeadings(rawContent);

	return {
		component: mod.default,
		title: (metadata.title as string) ?? params.slug,
		description: (metadata.description as string) ?? '',
		date: (metadata.date as string) ?? '',
		cover: (metadata.cover as string) ?? '',
		tags: (metadata.tags as string[]) ?? [],
		readingTime: estimateReadingTime(rawContent),
		headings,
		slug: params.slug
	};
};
