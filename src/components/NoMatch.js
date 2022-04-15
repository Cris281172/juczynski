import style from '../css/no-match.module.scss';
import {Link} from 'react-router-dom'
import {useTranslation} from "react-i18next";

const NoMatch = () => {
    const { t, i18n } = useTranslation();

    return(
        <div className={style.noMatch}>
            <h4 className={style.title}>{t("noMatch.title")}</h4>
            <p className={style.subtitle}>{t("noMatch.backInformation")}: <Link class={style.homeLink} to="/">{t("noMatch.button")}</Link></p>
        </div>
    )
}

export default NoMatch;