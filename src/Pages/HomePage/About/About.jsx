const About = () => {
    return (
        <div className="pt-36 pb-5 lg:px-60 bg-slate-50">
            <h2 className="text-3xl text-center font-semibold">About Me</h2>
            <p className="text-lg text-center mx-5  md:mx-8 lg:mx-3 my-6">Welcome to my corner of the web! I'm Afifa, an university graduate and an enthusiastic Junior Frontend Developer. My journey in the world of coding began with a fascination for transforming lines of code into captivating digital experiences. Armed with a solid foundation in HTML, CSS, and JavaScript, I've delved deeper into the realms of React, Firebase, MongoDB, Node.js, and Express.js, honing my skills to bring ideas to life.

            I believe in the power of thoughtful design and seamless functionality, and I'm on a quest to merge creativity with technology. Whether crafting intuitive user interfaces or diving into the backend intricacies, I find joy in the entire web development spectrum.

            Currently on the lookout for new opportunities, I am excited about the prospect of contributing to innovative projects and collaborating with like-minded individuals. Join me on this journey through my projects and experiences, and let's create something extraordinary together!</p>
            <div className="mx-10 md:mx-8 lg:mx-3 my-20 lg:flex lg:justify-around lg:items-center">
                <h2 className="text-3xl font-semibold">Graduated From</h2>
                <div>
                    <p className="text-2xl font-medium">North South University</p>
                    <p className="text-xl">Computer Science and Engineering</p>
                    <p className="text-xl">2017-2021</p>
                </div>
            </div>
        </div>
    );
};

export default About;