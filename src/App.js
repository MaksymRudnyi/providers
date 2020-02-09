import React, { useContext } from "react";
import {I18nProvider, LOCALES} from "./providers/i18n";
import translate from "./providers/i18n/translate";
import {ThemeProvider} from "styled-components";
import {getTheme} from "./providers/themes/getTheme";
import {Header} from "./styles";
import THEMES from "./providers/themes/themeList";
import {AppContext} from "./providers/context";
import {saveToStorage} from './utils/sessionStorage';

import Languages from './components/Languages';

function App () {
	const { state, dispatch } = useContext(AppContext);
	const setTheme = themeName => {
		dispatch({type: 'setTheme', themeName});
		saveToStorage('themeName', themeName);
	};

	const setLanguage = siteLang => {
		dispatch({type: 'setLang', siteLang});
		saveToStorage('siteLang', siteLang);
	};
	return (
		<I18nProvider locale={state.siteLang}>
			<ThemeProvider theme={getTheme(state.themeName)}>

				<Header>
					<Languages />
					{translate("hello", {name: state.name})}


					<div>
						{/*<button onClick={() => setLanguage(LOCALES.ENGLISH)}>English</button>*/}
						{/*<button onClick={() => setLanguage(LOCALES.GERMAN)}>German</button>*/}
						{/*<button onClick={() => setLanguage(LOCALES.FRENCH)}>French</button>*/}

						<button onClick={() => setTheme(THEMES.DARCULA)}>Darcula</button>
						<button onClick={() => setTheme(THEMES.APPLE)}>Apple</button>
					</div>
				</Header>

			</ThemeProvider>
		</I18nProvider>
	);

}

export default App;
