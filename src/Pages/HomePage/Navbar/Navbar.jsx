import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {

    return (
        <div>
            <div className="navbar md:px-5 lg:px-10 bg-slate-50 fixed z-10">
                <div className="md:navbar-start">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold">My Portfolio</h2>
                    </div>
                </div>
                <div className="md:hidden flex flex-grow justify-end">
                    <div className="dropdown navLink">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content right-3 z-[1] p-1 shadow bg-base-100 rounded-box w-28">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">About</Link></li>
                            <li><Link to="project" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Projects</Link></li>
                            <li><Link to="contact" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Contact</Link></li>
                            <li><a href="https://drive.google.com/uc?export=download&id=1de86_vdUeL-Pz-RbK9APQzxpxETHh83Y" download>Resume</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <div className="flex-none navLink">
                        <ul className="menu menu-horizontal px-1 lg:text-lg font-medium">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">About</Link></li>
                            <li><Link to="project" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Projects</Link></li>
                            <li><Link to="contact" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Contact</Link></li>
                            <li><a href="https://drive.google.com/uc?export=download&id=1de86_vdUeL-Pz-RbK9APQzxpxETHh83Y" download>Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;