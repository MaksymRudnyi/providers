import THEMES from "../themes/themeList";
import {getFromStorage} from "../../utils/sessionStorage";
import {LOCALES} from '../i18n/locales';

export default {
	themeName: getFromStorage('themeName') || THEMES.APPLE,
	siteLang: getFromStorage('siteLang') || LOCALES.ENGLISH,
	name: 'Maksym',
};
