const Projects = () => {
    return (
        <div className="pt-36 pb-5 lg:px-20 bg-slate-50">
            <h2 className="text-3xl text-center font-semibold mb-10">My Projects</h2>
            <div className="hero bg-slate-200 py-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/P1dSrf7/Project1.png" className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">SkillNest Academy</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-slate-50">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;