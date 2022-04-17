import style from '../css/project-more.module.scss'
import { AiFillCloseCircle } from "react-icons/ai";

const ProjectMore = ({setSeeMore, currentProjectImage, currentProjectTitle, currentLiveSrc, currentCodeSrc}) => {
    return(
        <div className={style.projectMore} onClick={() => console.log('testttt')}>
            <div className={style.moreSection}>
                <img className={style.image} src={currentProjectImage} />
                <h4 className={style.title}>{currentProjectTitle}</h4>
                <div className={style.liveCodeButtons}>
                    <a href={currentLiveSrc} target="_blank" className={style.button}>Live</a>
                    <a href={currentCodeSrc} target="_blank" className={style.button}>Code</a>
                </div>
            </div>
            <AiFillCloseCircle onClick={() => setSeeMore(false)} className={style.closeProjectMore} />
        </div>
    )
}

export default ProjectMore;