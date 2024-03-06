import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const Project1 = () => {
    return (
        <div className="bg-slate-50">
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/h19hPSN/4890914.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center">
                    <div className="lg:max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Pet Zone</h1>
                        <p className="mb-5 text-xl">Created an intuitive pet adoption and sales platform, offering users the ability to buy, sell, and discover pet accessories.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project1;