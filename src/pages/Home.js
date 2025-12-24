import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Container from "../components/layout/Container";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
export default function Home() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsxs(Container, { children: [_jsx(Skills, {}), _jsx(Experience, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] })] }));
}
