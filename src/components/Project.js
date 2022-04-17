import style from "../css/projects.module.scss";

const Project = ({title, imageSrc, setSeeMore, setCurrentProjectImage, setCurrentProjectTitle, liveSrc, setCurrentLiveSrc, codeSrc, setCurrentCodeSrc}) => {

    const seeMoreProjects = (e) => {
        setSeeMore(true);
        setCurrentProjectImage(e.target.parentNode.firstChild.src);
        setCurrentProjectTitle(e.target.parentNode.children[1].innerHTML);
        setCurrentLiveSrc(e.target.parentNode.children[2].href);
        setCurrentCodeSrc(e.target.parentNode.children[3].href);
    }

    return(
        <div className={style.project}>
            <img className={style.image} src={imageSrc} />
            <h4 className={style.title}>{title}</h4>
            <a href={liveSrc}></a>
            <a href={codeSrc}></a>
            <button className={style.button} onClick={seeMoreProjects}>Zobacz więcej</button>
        </div>
    )
}

export default Project;