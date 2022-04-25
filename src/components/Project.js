import style from "../css/projects.module.scss";
import ProjectMore from "./ProjectMore";
import {useState} from "react";
import {useSelector} from "react-redux";
import {projectsList} from "../redux/features/projectsSlice";

const Project = () => {
    const projects = useSelector(projectsList);
    const[scrollActive, setScrollActive] = useState('visible')
    const[seeMore, setSeeMore] = useState(false);
    const[currentProject, setCurrentProject] = useState({});
    const seeMoreProjects = (project) => {
        setCurrentProject(project)
        setSeeMore(true);
        setScrollActive('hidden');
    }
    document.body.style.overflow = scrollActive;


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
            {seeMore &&
            <ProjectMore
                setSeeMore={setSeeMore}
                currentProject={currentProject}
                setScrollActive={setScrollActive}
            />}
        </>
    )
}

export default Project;