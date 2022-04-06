import polandFlag from '../images/poland-flag-icon.png'
import usaFlag from '../images/usa-flag-icon.png'
import { useTranslation } from "react-i18next";
import style from '../css/language-wrapper.module.scss';
import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect} from 'react';

const LanguagesWrapper = () => {
    const { t, i18n } = useTranslation();

    const redirectToLang = (langToSearch, langToSet) => {
        const key = Object.entries(langToSearch).find(el => el[1] === location.pathname.slice(1))
        if(key){
            return navigate(`/${langToSet[key[0]]}`)
        }
    }

    const location = useLocation();
    const navigate = useNavigate();

    const changeLanguage = async (language) => {

        await i18n.changeLanguage(language);

        const enRoutes = t('routes', {lng: "en"});
        const plRoutes = t('routes', {lng: "pl"});

        switch(i18n.language){
            case 'en':
                redirectToLang(plRoutes, enRoutes);
                break;
            case 'pl':
                redirectToLang(enRoutes, plRoutes)
                break;
        }
    };

    useEffect(() => {
        localStorage.setItem('i18nextLng', 'pl');
    }, [])

    return(
        <div className={style.languageWrapper}>
            <button className={`${style.languageButton} ${i18n.language === 'pl' ? style.active : null}`} onClick={() => changeLanguage("pl")}>
                <img className={style.icon} src={polandFlag} alt="Poland flag"/>
            </button>
            <button className={`${style.languageButton} ${i18n.language === 'en' ? style.active : null}`} onClick={() => changeLanguage("en")}>
                <img className={style.icon} src={usaFlag} alt="Usa flag"/>
            </button>
        </div>
    )
}

export default LanguagesWrapper