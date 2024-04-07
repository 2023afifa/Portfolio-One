import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-slate-200 py-10 lg:py-20 mt-16">
                <div className="flex flex-col lg:flex-row-reverse lg:items-center w-full">
                    <img className="w-96 md:w-[500px] rounded-md mx-auto mb-5" src="https://i.ibb.co/bmJ5LKW/Banner-gif.gif" />
                    <div className="max-w-sm md:max-w-lg lg:max-w-2xl mx-auto border-2">
                        <h1 className="mb-5 font-bold">
                            <span className='text-2xl md:text-4xl'>Hi, I'm</span>
                            <span className='text-3xl md:text-5xl'><Typewriter
                                options={{
                                    strings: ['Afifa', 'A Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }} /></span>
                        </h1>
                        <p className="mb-5 text-lg md:text-xl">A dedicated frontend developer with a passion for crafting engaging user experiences through the art of coding</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;