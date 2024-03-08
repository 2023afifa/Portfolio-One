import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="pt-32 pb-5 md:px-8 lg:px-20 bg-slate-50">
            <h2 className="text-3xl text-center font-semibold mb-3">My Projects</h2>
            <div className="bg-cyan-500 h-2 w-12 rounded-2xl mx-auto"></div>
            <p className="mb-10 text-center font-semibold text-xl mt-5">See some of my projects here</p>
            <div className="hero bg-slate-200 py-5 lg:py-10 mb-10">
                <div className="hero-content flex-col lg:flex-row gap-10 lg:px-10">
                    <img src="https://i.ibb.co/xfbkyXj/Screenshot-2024-03-06-190807.png" className="lg:max-w-2xl rounded-sm shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Pet Zone</h1>
                        <p className="py-6">Created an intuitive pet adoption and sales platform, offering users the ability to buy, sell, and discover pet accessories.</p>
                        <Link to="/project1">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">See details</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero bg-slate-200 py-5 lg:py-10 mb-10">
                <div className="hero-content flex-col lg:flex-row gap-10 lg:px-10">
                    <img src="https://i.ibb.co/TR2k4D3/Screenshot-2024-03-06-213458.png" className="lg:max-w-2xl rounded-sm shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Classy Closet</h1>
                        <p className="py-6">ClassyCloset is your go-to destination for fashion and apparel. Discover curated collections of clothing, accessories, and more.</p>
                        <Link to="/project2">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">See details</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero bg-slate-200 py-5 lg:py-10 mb-10">
                <div className="hero-content flex-col lg:flex-row gap-10 lg:px-10">
                    <img src="https://i.ibb.co/P1dSrf7/Project1.png" className="lg:max-w-2xl rounded-sm shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">SkillNest Academy</h1>
                        <p className="py-6">SkillNest Academy is your gateway to acquiring new skills. Dive into a world of online courses where you can master web development, digital marketing, graphic design, data science, and language learning.</p>
                        <Link to="/project3">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">See details</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero bg-slate-200 py-5 lg:py-10 mb-10">
                <div className="hero-content flex-col lg:flex-row gap-10 lg:px-10">
                    <img src="https://i.ibb.co/7xDYq8t/Screenshot-2024-03-06-213349.png" className="lg:max-w-2xl rounded-sm shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">ShareWithHeart</h1>
                        <p className="py-6">ShareWithHeart is a community-driven platform committed to reducing food waste and fighting hunger.</p>
                        <Link to="/project4">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">See details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;