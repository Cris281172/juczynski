import style from '../css/about-me.module.scss'
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";


const AboutMe = () => {
    const { t, i18n } = useTranslation();


    return(
        <>
            <Helmet>
                <title>Portoflio - {t("metaTags.titles.aboutMe")}</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={style.aboutMe}>
                <h3 className={style.title}>O mnie</h3>
                <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
    )
}

export default AboutMe;