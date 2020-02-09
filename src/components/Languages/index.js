import React, {useContext} from "react";
import Button from "../Button";
import {Container} from "./styles";
import {AppContext} from "../../providers/context";
import {LOCALES} from "../../providers/i18n/locales";
import {saveToStorage} from "../../utils/sessionStorage";

export default () => {
	const {dispatch} = useContext(AppContext);

	const setLanguage = siteLang => {
		dispatch({type: 'setLang', siteLang});
		saveToStorage('siteLang', siteLang);
	};

	return <Container>{Object
		.keys(LOCALES)
		.map((locale) => <Button
				onClick={() => setLanguage(LOCALES[locale])}
				key={locale}>
				{locale}
			</Button>
		)}</Container>
}