import rozariosProject from '../images/rozarios-project.png'
import imageSearchProject from '../images/image-search-project.png'
import Project from './Project'
import style from '../css/projects.module.scss'
import {useState} from "react";
import ProjectMore from "./ProjectMore";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const Projects = () => {
    const { t, i18n } = useTranslation();

    const[seeMore, setSeeMore] = useState(false);
    const[currentProjectImage, setCurrentProjectImage] = useState('');
    const[currentProjectTitle, setCurrentProjectTitle] = useState('');
    const[currentLiveSrc, setCurrentLiveSrc] = useState('');
    const[currentCodeSrc, setCurrentCodeSrc] = useState('');

    return(
        <>
            <Helmet>
                <title>Portoflio - {t("metaTags.titles.projects")}</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={style.projectsWrapper}>
                <Project
                    title="Rozarios Project"
                    imageSrc={rozariosProject}
                    setSeeMore={setSeeMore}
                    setCurrentProjectImage={setCurrentProjectImage}
                    setCurrentProjectTitle={setCurrentProjectTitle}
                    liveSrc="https://rozarios.herokuapp.com"
                    setCurrentLiveSrc={setCurrentLiveSrc}
                    codeSrc="https://github.com/Cris281172/rozarios-page"
                    setCurrentCodeSrc={setCurrentCodeSrc}
                />
                <Project
                    title="Images Search Project"
                    imageSrc={imageSearchProject}
                    setSeeMore={setSeeMore}
                    setCurrentProjectImage={setCurrentProjectImage}
                    setCurrentProjectTitle={setCurrentProjectTitle}
                    liveSrc="https://react-search-images.herokuapp.com/"
                    setCurrentLiveSrc={setCurrentLiveSrc}
                    codeSrc="https://github.com/Cris281172/image-search-api"
                    setCurrentCodeSrc={setCurrentCodeSrc}
                />
            </div>
            {seeMore &&
                <ProjectMore
                    setSeeMore={setSeeMore}
                    currentProjectImage={currentProjectImage}
                    currentProjectTitle={currentProjectTitle}
                    currentLiveSrc={currentLiveSrc}
                    currentCodeSrc={currentCodeSrc}
                />}
        </>

    )
}

export default Projects;