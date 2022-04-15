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
                <h3 className={style.title}>{t("aboutMe.title")}</h3>
                <p className={style.text}>
                    {t("aboutMe.description")}
                </p>
            </div>
        </>
    )
}

export default AboutMe;