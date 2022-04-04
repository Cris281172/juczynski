import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";
import style from '../css/contact.module.scss'

const Contact = () => {
    return(
        <div className={style.contact}>
            <h3 className={style.title}>Kontakt</h3>
            <div className={style.socialContainer}>
                <h4 className={style.socialTitle}>Gitub:</h4>
                <a className={style.socialLink} href="https://github.com/Cris281172" target="_blank">
                    <SiGithub />
                </a>
            </div>
            <div className={style.socialContainer}>
                <h4 className={style.socialTitle}>Linkedin:</h4>
                <a className={style.socialLink} href="https://www.linkedin.com/in/krzysztof-juczy%C5%84ski-973b3b212/" target="_blank">
                    <SiLinkedin />
                </a>
            </div>
            <div className={style.socialContainer}>
                <h4 className={style.socialTitle}>Facebook:</h4>
                <a className={style.socialLink} href="https://www.facebook.com/krzys.juczynski.1" target="_blank">
                    <SiFacebook />
                </a>
            </div>
        </div>
    )
}

export default Contact;