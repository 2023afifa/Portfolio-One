const Projects = () => {
    return (
        <div className="pt-32 pb-5 md:px-8 lg:px-20 bg-slate-50">
            <h2 className="text-3xl text-center font-semibold mb-10">My Projects</h2>
            <div className="hero bg-slate-200 py-5 lg:py-20 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/P1dSrf7/Project1.png" className="lg:max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">SkillNest Academy</h1>
                        <p className="py-6">SkillNest Academy is your gateway to acquiring new skills. Dive into a world of online courses where you can master web development, digital marketing, graphic design, data science, and language learning. Elevate your expertise and embrace a future filled with opportunities.</p>
                        {/* <button className="btn bg-slate-50">See Details</button> */}
                    </div>
                </div>
            </div>
            <div className="hero bg-slate-200 py-5 lg:py-20 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/CmXhFxK/Project2.png" className="lg:max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">ShareWithHeart</h1>
                        <p className="py-6">ShareWithHeart is a community-driven platform committed to reducing food waste and fighting hunger. Join us in sharing surplus food with those in need. Together, we create a sustainable and compassionate network that nurtures our communities and fosters cooperation.</p>
                        {/* <button className="btn bg-slate-50">See Details</button> */}
                    </div>
                </div>
            </div>
            <div className="hero bg-slate-200 py-5 lg:py-20 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/0CLP7FX/Project3.png" className="lg:max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Classy Closet</h1>
                        <p className="py-6">ClassyCloset is your go-to destination for fashion and apparel. Discover curated collections of clothing, accessories, and more. Embrace style and sophistication as you explore our carefully selected pieces that define elegance and class in the world of fashion.</p>
                        {/* <button className="btn bg-slate-50">See Details</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;