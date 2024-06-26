import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Skill = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className="pt-16 md:px-10 lg:px-60 bg-gray-50 overflow-x-hidden">
            <h2 className="text-3xl text-center font-semibold mb-3">My Skills</h2>
            <div className="bg-cyan-500 h-2 w-12 rounded-2xl mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center my-10" data-aos="fade-up" data-aos-duration="2000">
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">HTML</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">CSS</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">Tailwind</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">Javascript</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">React</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">NextJS</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">Firebase</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">MongoDB</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">NodeJS</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">ExpressJS</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">C</button>
            </div>
        </div>
    );
};

export default Skill;