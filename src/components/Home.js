import selfiePhoto from '../images/selfie-photo.jpg'
import style from '../css/home.module.scss';
import {Trans, useTranslation} from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();


    return(
        <div className={style.home}>
            <div className={style.information}>
                <h3 className={style.hello}>{t("home.hello")}</h3>
                <h1 className={style.name}>{t("home.name")}</h1>
                <h2 className={style.workspace}>{t("home.workspace")}</h2>
            </div>
            <img src={selfiePhoto} alt="Selfie photo" className={style.selfiePhoto}/>
        </div>
    )
}

export default Home;