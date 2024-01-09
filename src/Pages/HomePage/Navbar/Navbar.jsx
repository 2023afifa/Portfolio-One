import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {

    return (
        <div>
            <div className="navbar px-10 bg-slate-50 fixed z-10">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">My Portfolio</h2>
                </div>
                <div className="flex-none navLink">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        <li><Link  to="/">Home</Link></li>
                        <li><Link  to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">About</Link></li>
                        <li><Link  to="project" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Projects</Link></li>
                        <li><Link  to="contact" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Contact</Link></li>
                        <li><a  href="https://drive.google.com/uc?export=download&id=1CJjiKKOBgbtsU70adih7l3mPUAc03QSO" download>Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;