const Banner = () => {
    return (
        <div>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/h19hPSN/4890914.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center">
                    <div className="lg:max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Hi, I'm Afifa</h1>
                        <p className="mb-5 text-xl">A dedicated frontend developer with a passion for crafting engaging user experiences through the art of coding</p>
                    </div>
                </div>
            </div> */}

            <div className="hero min-h-screen bg-slate-100">
                <div className="flex flex-col lg:flex-row-reverse justify-around items-center w-full">
                    <img className="w-[500px] rounded-md" src="https://i.ibb.co/bmJ5LKW/Banner-gif.gif" />
                    <div className="lg:max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Hi, I'm Afifa</h1>
                        <p className="mb-5 text-xl">A dedicated frontend developer with a passion for crafting engaging user experiences through the art of coding</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;