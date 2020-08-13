import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../lang/fr.json';
import Arabic from '../lang/ar.json';
import English from '../lang/en.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'en') {
    lang = English;
}else {
    if (local === 'fr') {
        lang = French;
    } else {
        lang = Arabic;
    }
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else {
            if (newLocale === 'fr'){
                setMessages(French);
            } else {
                setMessages(Arabic);
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;