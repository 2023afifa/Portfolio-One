import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const Project1 = () => {
    return (
        <div className="bg-slate-50">
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/m8JWYDX/5667004.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="lg:max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Pet Zone</h1>
                        <p className="mb-5 text-xl">Created an intuitive pet adoption and sales platform, offering users the ability to buy, sell, and discover pet accessories.</p>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <img src="https://i.ibb.co/xfbkyXj/Screenshot-2024-03-06-190807.png" alt="" />
                <img src="https://i.ibb.co/HxJxd6y/Project-1-b.png" alt="" />
                <img src="https://i.ibb.co/PQ3FVr9/Project-1-c.png" alt="" />
                <img src="https://i.ibb.co/C7MncHP/Project-1-d.png" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project1;