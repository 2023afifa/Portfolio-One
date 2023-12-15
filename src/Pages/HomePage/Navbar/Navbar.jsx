import { Link } from "react-scroll";

const Navbar = () => {

    return (
        <div className="lg:mx-12">
            <div className="navbar bg-slate-50">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">My Portfolio</h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} activeClass="active">About</Link></li>
                        <li><Link to="project" spy={true} smooth={true} offset={50} duration={500} activeClass="active">Projects</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} activeClass="active">Contact</Link></li>
                        <li><a href="https://drive.google.com/uc?export=download&id=1fQwMDeDE5O64l0VKKVlUCkCz1Vp0aohK" download>Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;