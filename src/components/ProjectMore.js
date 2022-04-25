import style from '../css/project-more.module.scss'
import { AiFillCloseCircle } from "react-icons/ai";

const ProjectMore = ({setSeeMore, currentProject, setScrollActive}) => {
    return(
        <div className={style.projectMore} onClick={() => console.log('testttt')}>
            <div className={style.moreSection}>
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