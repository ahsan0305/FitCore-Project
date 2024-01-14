import { Link } from "react-router-dom";


const NavBar = () => {

    const navItems = <>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/about"}>About</Link></li>
    <li><Link to={"/classes"}>Classes</Link></li>
    <li><Link to={"/trainers"}>Trainers</Link></li>
    <li><Link to={"/pricing"}>Pricing</Link></li>
    <li><Link to={"/contact"}>Contact</Link></li>
    </>
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/"><img src="../../../../public/Images/Logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#fff]">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-[#72AF43]">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;