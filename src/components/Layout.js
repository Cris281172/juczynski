import { Outlet } from 'react-router-dom';
import MainNav from '../route/MainNav'
import style from '../css/layout.module.scss';
import LanguagesWrapper from "./LanguagesWrapper";
import HomeTime from "./HomeTime";

const Layout = () => {

    return(
        <div className={style.container}>
            <div className={style.home}>
                <HomeTime />
                <LanguagesWrapper />
                <MainNav />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;