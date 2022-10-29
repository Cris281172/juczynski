import style from '../css/project-more.module.scss'
import { AiFillCloseCircle } from "react-icons/ai";
import {useRef} from 'react';


const ProjectMore = ({setSeeMore, currentProject, setScrollActive}) => {
    const projectMore = useRef();

    const closeProjectMoreByWindow = (e) => {
        if(e.target === projectMore.current){
            closeProjectMore()
        }

    }

    const closeProjectMore = () => {
        setSeeMore(false)
        setScrollActive('visible');
    }



    return(
        <div className={style.projectMore} onClick={closeProjectMoreByWindow} ref={projectMore}>
            <div className={style.moreSection}>
                <img className={style.image} src={currentProject.img} />
                <h4 className={style.title}>{currentProject.title}</h4>
                <p className={style.text}>{currentProject.description}</p>
                <div className={style.liveCodeButtons}>
                    <a href={currentProject.live} target="_blank" className={style.button}>Live</a>
                    <a href={currentProject.code} target="_blank" className={style.button}>Code</a>
                </div>
            </div>
            <AiFillCloseCircle onClick={closeProjectMore} className={style.closeProjectMore} />
        </div>
    )
}

export default ProjectMore;