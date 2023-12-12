const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/2yrG316/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hi, I'm Afifa</h1>
                        <p className="mb-5">A dedicated frontend developer with a passion for crafting engaging user experiences through the art of coding</p>
                        <button className="btn bg-slate-50 text-lg">Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;