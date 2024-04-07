import { FaTelegram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="footer bg-black text-slate-200 py-10 px-10 lg:px-20">
                <aside>
                    <p className="font-bold text-xl lg:text-3xl">Afifa Alamgir</p>
                    <p className="text-xs md:text-sm max-w-xs md:max-w-lg lg:max-w-xl">A frontend developer with a passion for crafting engaging user experiences through the art of coding</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/2023afifa" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-xl lg:text-3xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/afifa-a-a57b112b8" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-xl lg:text-3xl" />
                        </a>
                        <a href="https://t.me/afifazzz" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="text-xl lg:text-3xl" />
                        </a>
                    </div>
                </nav>
            </footer>
            <hr />
            <footer className="footer footer-center py-5 bg-black text-slate-200">
                <aside>
                    <p>Copyright © {currentYear} - All right reserved by Afifa</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;