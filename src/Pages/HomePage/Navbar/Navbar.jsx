const Navbar = () => {
    return (
        <div className="mx-12">
            <div className="navbar bg-slate-50">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">My Portfolio</h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        <li><a>Home</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Resume</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;