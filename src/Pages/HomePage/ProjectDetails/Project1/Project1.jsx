import { Link } from "react-scroll";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const Project1 = () => {
    return (
        <div className="bg-slate-50">
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/m8JWYDX/5667004.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="lg:max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">Pet Zone(Team Project)</h1>
                        <p className="mb-5 text-xl">Created an intuitive pet adoption and sales platform, offering users the ability to buy, sell, and discover pet accessories.</p>
                    </div>
                </div>
            </div>
            <div className="m-20 flex lg:flex-row items-center gap-14">
                <div className="w-1/2">
                    <h2 className="text-3xl font-semibold mb-5">Project Overview</h2>
                    <p className="text-justify">It is a pet adoption website where you can find your new furry friend and shop for pet accessories. Our platform offers a special booking request feature for exclusive pets, allowing you to reserve them in advance. If you have any questions or need advice about your pet, our helpdesk section is here to assist you.

                        Becoming a seller on our website is simple – just submit a request, and once approved by our admin, you can start selling your pet-related products. Sellers can add pets to our website after providing all necessary information, which will be reviewed by our admin before appearing in our All Pets section.

                        In our pet accessories section, we have a handy filtering system that lets you easily find items for your specific pet, whether it's toys, furniture, or beds. Our platform is designed to cater to all your pet needs in one convenient place.
                    </p>
                    <div className="my-10">
                        <h2 className="text-2xl font-semibold mb-5">Technologies Used</h2>
                        <div className="space-x-3">
                            <button className="text-lg bg-slate-200 px-5 py-2 rounded">React</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 rounded">Firebase</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 rounded">MongoDB</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 rounded">NodeJS</button>
                            <button className="text-lg bg-slate-200 px-5 py-2 rounded">ExpressJS</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Live Link</h2>
                        <a href="https://pet-zone-project-code-wizads-ecru.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">Visit Project</button>
                        </a>
                    </div>
                </div>
                <div className="w-2/5">
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/xfbkyXj/Screenshot-2024-03-06-190807.png" alt="" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/HxJxd6y/Project-1-b.png" alt="" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/PQ3FVr9/Project-1-c.png" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project1;