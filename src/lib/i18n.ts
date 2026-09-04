import { getLocale } from '$lib/paraglide/runtime';

export type LocalizedText = { en: string; hu: string };

export function t<T>(text: Record<'en' | 'hu', T>): T {
	return text[getLocale()] ?? text.en;
}
