import style from '../css/loading.module.scss';

const Loading = () => {
    return(
        <div className={style.ring}>
            Loading
            <span></span>
        </div>
    )
}

export default Loading;