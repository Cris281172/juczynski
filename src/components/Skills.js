import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub, SiVuedotjs, SiNodedotjs, SiMongodb, SiExpress, SiPug } from "react-icons/si";
import ReactTooltip from 'react-tooltip';
import style from '../css/skills.module.scss'
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

const Skills = () => {
    const { t, i18n } = useTranslation();

    return(
        <>
            <Helmet>
                <title>Portoflio - {t("metaTags.titles.skills")}</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={style.skills}>
                <h3 className={style.title}>{t("skills.title")}</h3>
                <ul className={style.skillsList}>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/HTML" target="_blank">
                            <SiHtml5 className={style.link} data-tip="HTML" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/Kaskadowe_arkusze_styl%C3%B3w" target="_blank">
                            <SiCss3 className={style.link} data-tip="CSS" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/JavaScript" target="_blank">
                            <SiJavascript className={style.link} data-tip="JavaScript" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/React.js" target="_blank">
                            <SiReact className={style.link} data-tip="React.js" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="" target="_blank">
                            <SiVuedotjs className={style.link} data-tip="Vue.js" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/Git_(oprogramowanie)" target="_blank">
                            <SiGit className={style.link} data-tip="Git" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/GitHub" target="_blank">
                            <SiGithub className={style.link} data-tip="Github" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/Node.js" target="_blank">
                            <SiNodedotjs className={style.link} data-tip="Node.js" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/MongoDB" target="_blank">
                            <SiMongodb className={style.link} data-tip="Mongodb" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="" target="_blank">
                            <SiExpress className={style.link} data-tip="Express" />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="" target="_blank">
                            <SiPug className={style.link} data-tip="Pug" />
                        </a>
                    </li>
                </ul>
                <ReactTooltip className={style.tooltip} />
            </div>
        </>
    )
}

export default Skills;