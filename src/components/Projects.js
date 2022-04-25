import Project from './Project'
import style from '../css/projects.module.scss'
import {useState} from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const Projects = () => {
    const { t, i18n } = useTranslation();



    return(
        <>
            <Helmet>
                <title>Portoflio - {t("metaTags.titles.projects")}</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={style.projectsWrapper}>
                <Project />
            </div>
        </>

    )
}

export default Projects;