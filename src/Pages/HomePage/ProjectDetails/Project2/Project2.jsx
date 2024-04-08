import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project2 = () => {

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
                        <h1 className="mb-5 text-5xl font-bold">SkillNest Academy</h1>
                        <p className="mb-5 text-xl">SkillNest Academy is your gateway to acquiring new skills. Dive into a world of online courses where you can master web development, digital marketing, graphic design, data science, and language learning.</p>
                    </div>
                </div>
            </div>
            <div className="m-8 md:m-12 lg:m-20 flex flex-col-reverse lg:flex-row lg:items-center gap-5 lg:gap-14">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold mb-5">Project Overview</h2>
                    <p className="text-justify">
                        SkillNest Academy is an online learning hub where anyone can explore and master a wide range of skills. Whether it's building websites, understanding marketing strategies, or creating stunning designs, SkillNest has something for everyone.

                        Admins play a vital role in managing users and ensuring the integrity of teacher and course requests. They keep the platform running smoothly and safely.

                        Teachers have the opportunity to create and manage their own courses, sharing their knowledge with eager learners worldwide. Students can freely browse through various courses and enroll in the ones that pique their interest.

                        With a user-friendly dashboard designed for different roles, SkillNest ensures that admins, teachers, and students can easily navigate the platform and access the tools they need.

                        SkillNest is dedicated to empowering individuals with the skills they need to succeed in today's fast-paced world. Whether you're a lifelong learner or a passionate educator, SkillNest provides the platform to explore, learn, and grow.
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
                        <a href="https://classmanagement-8dd56.web.app" target="_blank" rel="noopener noreferrer">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">Visit Project</button>
                        </a>
                    </div>
                </div>
                <div className="lg:w-2/5">
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/XtTXdVh/Screenshot-2024-03-15-201328.png" alt="" data-aos="fade-up" data-aos-duration="2000" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/0r2n2km/Screenshot-2024-03-15-201639.png" alt="" data-aos="fade-up" data-aos-duration="2000" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/Brcgvs6/Screenshot-2024-03-15-202031.png" alt="" data-aos="fade-up" data-aos-duration="2000" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project2;