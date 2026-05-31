import { defaultLocale, messages } from '../localization';

export function getCurrentLocale(locale?: string): keyof typeof messages {
	return (locale === 'en')
		? (locale as keyof typeof messages)
		: defaultLocale;
}

export function useMessages(locale: keyof typeof messages) {
	return function m(key: keyof (typeof messages)[typeof defaultLocale]): string {
		return messages[locale][key] || messages[defaultLocale][key];
	};
}
