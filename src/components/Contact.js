import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";
import style from '../css/contact.module.scss'
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const { t, i18n } = useTranslation();

    return(
        <>
            <Helmet>
                <title>Portoflio - {t("metaTags.titles.contact")}</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={style.contact}>
                <h3 className={style.title}>Kontakt</h3>
                <div className={style.socialContainer}>
                    <a className={style.socialLink} href="https://github.com/Cris281172" target="_blank">
                        <h4 className={style.socialTitle}>Gitub</h4>
                        <SiGithub />
                    </a>
                </div>
                <div className={style.socialContainer}>
                    <a className={style.socialLink} href="https://www.linkedin.com/in/krzysztof-juczy%C5%84ski-973b3b212/" target="_blank">
                        <h4 className={style.socialTitle}>Linkedin</h4>
                        <SiLinkedin />
                    </a>
                </div>
                <div className={style.socialContainer}>
                    <a className={style.socialLink} href="https://www.facebook.com/krzys.juczynski.1" target="_blank">
                        <h4 className={style.socialTitle}>Facebook</h4>
                        <SiFacebook />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;