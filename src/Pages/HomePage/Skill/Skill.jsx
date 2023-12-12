const Skill = () => {
    return (
        <div className="pt-16 lg:px-60 bg-gray-50">
            <h2 className="text-3xl text-center font-semibold">My Skills</h2>
            <div className="grid lg:grid-cols-4 gap-10 justify-center my-10">
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">HTML</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">CSS</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">Tailwind</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">Javascript</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">React</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">Firebase</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">MongoDB</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">NodeJS</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">ExpressJS</button>
                <button className="text-lg bg-slate-200 px-5 py-2 rounded">C</button>
            </div>
        </div>
    );
};

export default Skill;