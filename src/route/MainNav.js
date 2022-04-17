import style from '../css/main-nav.module.scss'
import { NavLink  } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import {useRef} from 'react';

const MainNav = () => {

    const { t, i18n } = useTranslation();

    const list = useRef();
    const mainNav = useRef();

    const listDisplay = () => {
        if(mainNav.current.classList.value === 'main-nav_mainNav__IjQBr main-nav_active__chPTP'){
            setTimeout(() => {
                mainNav.current.classList.toggle(`${style.active}`);
            }, 200)
            list.current.classList.toggle(`${style.active}`);
        }
        else{
            list.current.classList.toggle(`${style.active}`);
            mainNav.current.classList.toggle(`${style.active}`);
        }
      //  list.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
       // list.current.options({behavior: "smooth", block: "end", inline: "nearest"});

    }

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <nav className={style.mainNav} ref={mainNav}>
            <GiHamburgerMenu  className={style.hamburgerMenu} onClick={() => listDisplay()} />
            <ul className={style.navList} ref={list}>
                <li className={style.item}>
                    <NavLink className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link } onClick={scrollToTop}  to="/">{t('mainNav.home')}</NavLink >
                </li>
                <li className={style.item}>
                    <NavLink  className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link } onClick={scrollToTop}  to={`/${t('routes.aboutMe')}`}>{t('mainNav.aboutMe')}</NavLink >
                </li>
                <li className={style.item}>
                    <NavLink  className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link } onClick={scrollToTop} to={`/${t('routes.skills')}`}>{t('mainNav.skills')}</NavLink >
                </li>
                <li className={style.item}>
                    <NavLink  className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link } onClick={scrollToTop}  to={`/${t('routes.contact')}`}>{t('mainNav.contact')}</NavLink >
                </li>
                <li className={style.item}>
                    <NavLink  className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link } onClick={scrollToTop}  to={`/${t('routes.projects')}`}>{t('mainNav.projects')}</NavLink >
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;