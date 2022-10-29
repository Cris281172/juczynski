import style from '../css/project-more.module.scss'
import { AiFillCloseCircle } from "react-icons/ai";
import {useRef} from 'react';


const ProjectMore = ({setSeeMore, currentProject, setScrollActive}) => {
    const projectMore = useRef();
    const moreSection = useRef();

    window.addEventListener('click', e => {


    })


    return(
        <div className={style.projectMore} ref={projectMore}>
            <div className={style.moreSection} ref={moreSection}>
                <img className={style.image} src={currentProject.img} />
                <h4 className={style.title}>{currentProject.title}</h4>
                <p>{currentProject.description}</p>
                <div className={style.liveCodeButtons}>
                    <a href={currentProject.live} target="_blank" className={style.button}>Live</a>
                    <a href={currentProject.code} target="_blank" className={style.button}>Code</a>
                </div>
            </div>
            <AiFillCloseCircle onClick={() => {
                setSeeMore(false)
                setScrollActive('visible');
            }} className={style.closeProjectMore} />
        </div>
    )
}

export default ProjectMore;