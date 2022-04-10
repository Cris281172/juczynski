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
                            <h4 className={style.title}>HTML</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/Kaskadowe_arkusze_styl%C3%B3w" target="_blank">
                            <SiCss3 className={style.link} data-tip="CSS" />
                            <h4 className={style.title}>CSS</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/JavaScript" target="_blank">
                            <SiJavascript className={style.link} data-tip="JavaScript" />
                            <h4 className={style.title}>JavaScript</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/React.js" target="_blank">
                            <SiReact className={style.link} data-tip="React.js" />
                            <h4 className={style.title}>React.js</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="" target="_blank">
                            <SiVuedotjs className={style.link} data-tip="Vue.js" />
                            <h4 className={style.title}>Vue.js</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/Git_(oprogramowanie)" target="_blank">
                            <SiGit className={style.link} data-tip="Git" />
                            <h4 className={style.title}>Git</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/GitHub" target="_blank">
                            <SiGithub className={style.link} data-tip="Github" />
                            <h4 className={style.title}>Github</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/Node.js" target="_blank">
                            <SiNodedotjs className={style.link} data-tip="Node.js" />
                            <h4 className={style.title}>Node.js</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pl.wikipedia.org/wiki/MongoDB" target="_blank">
                            <SiMongodb className={style.link} data-tip="Mongodb" />
                            <h4 className={style.title}>Mongodb</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="" target="_blank">
                            <SiExpress className={style.link} data-tip="Express" />
                            <h4 className={style.title}>Express</h4>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="" target="_blank">
                            <SiPug className={style.link} data-tip="Pug" />
                            <h4 className={style.title}>Pug</h4>
                        </a>
                    </li>
                </ul>
                <ReactTooltip className={style.tooltip} />
            </div>
        </>
    )
}

export default Skills;