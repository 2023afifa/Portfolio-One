import { FaTelegram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="footer p-20 bg-black text-slate-200">
                <aside>
                    <p className="font-bold text-3xl">Afifa</p>
                    <p className="lg:max-w-xl">A frontend developer with a passion for crafting engaging user experiences through the art of coding</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/2023afifa"><FaGithub className="text-3xl" /></a>
                        <a href=""><FaLinkedinIn className="text-3xl" /></a>
                        <a href="https://t.me/afifazzz"><FaTelegram className="text-3xl" /></a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-10 bg-black text-slate-200">
                <aside>
                    <p>Copyright © {currentYear} - All right reserved by Afifa</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;