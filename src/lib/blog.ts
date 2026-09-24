export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	cover: string;
	tags: string[];
	readingTime: number;
	published: boolean;
}

export function estimateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatDate(dateStr: string): string {
	const date = new Date(dateStr);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
