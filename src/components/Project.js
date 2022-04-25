import style from "../css/projects.module.scss";
import ProjectMore from "./ProjectMore";
import {useState} from "react";
import {useSelector} from "react-redux";
import {projectsList} from "../redux/features/projectsSlice";

const Project = () => {
    const projects = useSelector(projectsList);

    const[seeMore, setSeeMore] = useState(false);
    const[currentProject, setCurrentProject] = useState({});
    const seeMoreProjects = (project) => {
        setCurrentProject(project)
        setSeeMore(true);

    }

    console.log(currentProject)



    return(
        <>
            {projects.map(project => {
                return(
                    <div className={style.project}>
                        <img className={style.image} src={project.img} />
                        <h4 className={style.title}>{project.title}</h4>
                        <button className={style.button} onClick={() => seeMoreProjects(project)}>Zobacz więcej</button>
                    </div>
                )
            })}
            {/*<div className={style.project}>*/}
            {/*    <img className={style.image} src={imageSrc} />*/}
            {/*    <h4 className={style.title}>{title}</h4>*/}
            {/*    <a href={liveSrc}></a>*/}
            {/*    <a href={codeSrc}></a>*/}
            {/*    <button className={style.button} onClick={seeMoreProjects}>Zobacz więcej</button>*/}
            {/*</div>*/}
            {seeMore &&
            <ProjectMore
                setSeeMore={setSeeMore}
                currentProject={currentProject}
            />}
        </>
    )
}

export default Project;