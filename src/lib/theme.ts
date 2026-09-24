import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const initial = browser ? (localStorage.getItem('theme') ?? 'dark') : 'dark';
	const { subscribe, set, update } = writable<'light' | 'dark'>(initial as 'light' | 'dark');

	if (browser) {
		document.documentElement.setAttribute('data-theme', initial);
	}

	return {
		subscribe,
		toggle() {
			update((current) => {
				const next = current === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', next);
					document.documentElement.setAttribute('data-theme', next);
				}
				return next;
			});
		},
		set(value: 'light' | 'dark') {
			if (browser) {
				localStorage.setItem('theme', value);
				document.documentElement.setAttribute('data-theme', value);
			}
			set(value);
		}
	};
}

export const theme = createThemeStore();
