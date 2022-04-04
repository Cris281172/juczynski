import Layout from '../components/Layout.js'
import Home from '../components/Home.js'
import AboutMe from '../components/AboutMe.js'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { Routes, Route } from 'react-router-dom';
import {useTranslation} from "react-i18next";


const RoutesWrapper = () => {
    const { t, i18n } = useTranslation();


    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home /> } />
                <Route path={t("routes.aboutMe")} element={< AboutMe />} />
                <Route path={t("routes.skills")} element={< Skills />} />
                <Route path={t("routes.contact")} element={< Contact />} />
            </Route>
        </Routes>
    )
}

export default RoutesWrapper;
