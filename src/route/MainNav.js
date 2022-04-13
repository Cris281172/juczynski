import style from '../css/main-nav.module.scss'
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import {useRef} from 'react';

const MainNav = () => {

    const { t, i18n } = useTranslation();

    const list = useRef();

    const listDisplay = () => {
        list.current.classList.toggle(`${style.active}`);
      //  list.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
       // list.current.options({behavior: "smooth", block: "end", inline: "nearest"});

    }

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <nav className={style.mainNav}>
            <GiHamburgerMenu  className={style.hamburgerMenu} onClick={() => listDisplay()} />
            <ul className={style.navList} ref={list}>
                <li className={style.item}>
                    <Link data-item="/" className={`${style.link} ${style.active}`} onClick={scrollToTop}  to="/">{t('mainNav.home')}</Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} onClick={scrollToTop}  to={`/${t('routes.aboutMe')}`}>{t('mainNav.aboutMe')}</Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} onClick={scrollToTop} to={`/${t('routes.skills')}`}>{t('mainNav.skills')}</Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} onClick={scrollToTop}  to={`/${t('routes.contact')}`}>{t('mainNav.contact')}</Link>
                </li>

            </ul>
        </nav>
    )
}

export default MainNav;