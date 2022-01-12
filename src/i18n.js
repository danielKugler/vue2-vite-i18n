import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios'
import translations from './locales/de.json';

Vue.use(VueI18n);

export const i18n = new VueI18n({
	locale: 'de',
	fallbackLocale: 'de',
	messages: { de: translations },
});

const loadedLanguages = ['de'];
export const languagesAvailable = ['de', 'en'];

function setI18nLanguage(lang) {
	localStorage.setItem('userLang', lang);
	i18n.locale = lang;
	axios.defaults.headers.common['Accept-Language'] = lang;
	document.querySelector('html').setAttribute('lang', lang);
	return lang;
}

export function navigatorCloseLanguage() {
	const userLanguage = localStorage.getItem('userLang') || navigator.language;
	if (languagesAvailable.includes(userLanguage)) {
		return loadLanguageAsync(userLanguage);
	} else if (userLanguage.includes('-')) {
		const userLanguageSplit = userLanguage.split('-');
		if (languagesAvailable.includes(userLanguageSplit[0])) {
			return loadLanguageAsync(userLanguageSplit[0]);
		}
	}
	return 'de';
}

export function loadLanguageAsync(lang) {
	if (i18n.locale !== lang) {
		if (!loadedLanguages.includes(lang)) {
			return import(`./locales/${lang}.json`)
				.then((transl) => {
					i18n.setLocaleMessage(lang, transl.default);
					loadedLanguages.push(lang);
					return setI18nLanguage(lang);
			});
		}
		return Promise.resolve(setI18nLanguage(lang));
	}
	return Promise.resolve(lang);
}
