import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project4 = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className="bg-slate-50">
            <Navbar></Navbar>
            <div className="hero mt-20" style={{ backgroundImage: 'url(https://i.ibb.co/h19hPSN/4890914.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center py-24">
                    <div className="lg:max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">ShareWithHeart</h1>
                        <p className="mb-5 text-xl">ShareWithHeart is a community-driven platform committed to reducing food waste and fighting hunger.</p>
                    </div>
                </div>
            </div>
            <div className="m-8 md:m-12 lg:m-20 flex flex-col-reverse lg:flex-row lg:items-center gap-5 lg:gap-14">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold mb-5">Project Overview</h2>
                    <p className="text-justify">
                        ShareWithHeart is a platform where people can share extra meals with those in need. Users must register to access detailed food listings and contribute by adding their own surplus food. The Manage Food section allows easy management of listings. Search and sorting features help users find meals based on preferences and expiration time. ShareWithHeart fosters a community spirit of generosity and support for those in need. It's a simple, user-friendly platform promoting the sharing of resources for the greater good.
                    </p>
                    <div className="my-10">
                        <h2 className="text-2xl font-semibold mb-5">Technologies Used</h2>
                        <div className="md:space-x-3 space-y-3">
                            <button className="text-lg bg-slate-200 px-5 py-2 mr-1 md:mr-0 rounded">React</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 mr-1 md:mr-0 rounded">Firebase</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 mr-1 md:mr-0 rounded">MongoDB</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 mr-1 md:mr-0 rounded">NodeJS</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 mr-1 md:mr-0 rounded">ExpressJS</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Live Link</h2>
                        <a href="https://foodsharing-d0b61.web.app" target="_blank" rel="noopener noreferrer">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">Visit Project</button>
                        </a>
                    </div>
                </div>
                <div className="lg:w-2/5">
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/h8gfLDx/Project-4-b.png" alt="" data-aos="fade-up" data-aos-duration="2000" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/NrnZVyf/Project-4-c.png" alt="" data-aos="fade-up" data-aos-duration="2000" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/0M4FGs4/Project-4-d.png" alt="" data-aos="fade-up" data-aos-duration="2000" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project4;