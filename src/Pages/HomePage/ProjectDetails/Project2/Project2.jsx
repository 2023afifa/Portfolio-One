import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const Project2 = () => {
    return (
        <div className="bg-slate-50">
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/m8JWYDX/5667004.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="lg:max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">Classy Closet</h1>
                        <p className="mb-5 text-xl">ClassyCloset is your go-to destination for fashion and apparel. Discover curated collections of clothing, accessories, and more.</p>
                    </div>
                </div>
            </div>
            <div className="m-8 md:m-12 lg:m-20 flex flex-col-reverse lg:flex-row lg:items-center gap-5 lg:gap-14">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold mb-5">Project Overview</h2>
                    <p className="text-justify">
                        We're your go-to place for all things fashion. From stylish clothes to cool accessories, trendy bags, and even perfumes, we've got it all covered.

                        This website is super easy to use. Just click around to explore different categories and find the perfect outfit or accessory for any occasion. And if you see something you like, just click "Add to Cart" to buy it.

                        Want to know what's hot right now? Check out my "Most Loved" section to see what other people are raving about. You might just find your new favorite item!

                        Got something awesome to share? You can add your own products to our site and even edit the details to make sure everything's just right.

                        At Classy Closet, we're all about making fashion fun and accessible for everyone. So come on in, take a look around, and let's start styling!
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
                        <a href="https://brandshop-bdf06.web.app" target="_blank" rel="noopener noreferrer">
                            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">Visit Project</button>
                        </a>
                    </div>
                </div>
                <div className="lg:w-2/5">
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/MnLS4rY/Screenshot-2024-03-07-230802.png" alt="" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/sRFcWBv/Screenshot-2024-03-07-231050.png" alt="" />
                    <img className="w-4/5 mx-auto mb-10 rounded-sm shadow-xl" src="https://i.ibb.co/rfzDCdn/Screenshot-2024-03-07-231309.png" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project2;