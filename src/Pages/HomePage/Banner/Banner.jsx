import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-200">
                <div className="flex flex-col lg:flex-row-reverse justify-around items-center w-full">
                    <img className="w-[500px] rounded-md" src="https://i.ibb.co/bmJ5LKW/Banner-gif.gif" />
                    <div className="lg:max-w-2xl">
                        <h1 className="mb-5 font-bold">
                            <span className='text-4xl'>Hi, I'm</span>
                            <span className='text-5xl'><Typewriter
                                options={{
                                    strings: ['Afifa', 'A Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }} /></span>
                        </h1>
                        <p className="mb-5 text-xl">A dedicated frontend developer with a passion for crafting engaging user experiences through the art of coding</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;