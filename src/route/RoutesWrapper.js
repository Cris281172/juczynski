import Layout from '../components/Layout.js'
import Home from '../components/Home.js'
import AboutMe from '../components/AboutMe.js'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { Routes, Route } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import NoMatch from '../components/NoMatch'
import Projects from "../components/Projects";
import CommercialExperience from '../components/CommercialExperience'

const RoutesWrapper = () => {
    const { t, i18n } = useTranslation();


    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home /> } />
                <Route path={t("routes.aboutMe")} element={< AboutMe />} />
                <Route path={t("routes.skills")} element={< Skills />} />
                <Route path={t("routes.commercialExperience")} element={< CommercialExperience />} />
                <Route path={t("routes.contact")} element={< Contact />} />
                <Route path={t("routes.projects")} element={<Projects />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default RoutesWrapper;
