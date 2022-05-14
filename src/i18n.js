import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

//window.navigator.language

const userWindowLanguage = window.navigator.language.split('-')[0];
const lang = ['pl', 'en'].indexOf(userWindowLanguage) !== -1 ? userWindowLanguage : 'en'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : lang ,
    debug: true,
    preload: ['pl', 'en'],
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    returnObjects: true
})

export default i18n