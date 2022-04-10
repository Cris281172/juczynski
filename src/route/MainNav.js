import style from '../css/main-nav.module.scss'
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import {useRef} from 'react';

const MainNav = () => {

    const { t, i18n } = useTranslation();

    const list = useRef();

    const listDisplay = () => {
        console.log();
        list.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

        list.current.classList.toggle(`${style.active}`);
    }

    return(
        <nav className={style.mainNav}>
            <GiHamburgerMenu  className={style.hamburgerMenu} onClick={() => listDisplay()} />
            <ul className={style.navList} ref={list}>
                <li className={style.item}>
                    <Link className={`${style.link} ${style.active}`}  to="/">{t('mainNav.home')}</Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link}  to={`/${t('routes.aboutMe')}`}>{t('mainNav.aboutMe')}</Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} to={`/${t('routes.skills')}`}>{t('mainNav.skills')}</Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link}  to={`/${t('routes.contact')}`}>{t('mainNav.contact')}</Link>
                </li>

            </ul>
        </nav>
    )
}

export default MainNav;