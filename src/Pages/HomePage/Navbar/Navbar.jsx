import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Navbar = () => {
    return (
        <div className="mx-12">

            <div className="navbar bg-slate-50">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">My Portfolio</h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        {/* <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li><Link to="project" smooth={true} duration={500}>Projects</Link></li>
                        <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
                        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li> */}
                    </ul>
                </div>
            </div>

            {/* <Element name="about">
                <About></About>
            </Element>
            <Element name="contact">
                <Contact></Contact>
            </Element>
            <Element name="project">
                <Projects></Projects>
            </Element> */}

        </div>
    );
};

export default Navbar;