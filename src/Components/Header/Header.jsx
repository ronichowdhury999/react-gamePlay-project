import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handalSignOut = () => {
        logOut()
            .then()
            .catch()

    }
    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown  ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/'}>Home</NavLink></li>

                        <li> <NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/about'}>About us</NavLink> </li>

                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/Contact'}>Contact</NavLink></li>
                    </ul>
                </div>
                <h3 className=" normal-case font-bold font-serif lg:text-3xl text-xl">Play <span className="text-red-600">Game</span></h3>
            </div>
            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold font-serif">
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/'}>Home</NavLink></li>

                        <li> <NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/about'}>About us</NavLink> </li>

                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/Contact'}>Contact</NavLink></li>
                    </ul>
                </div>
                <div>
                    {
                        user ?
                            <div className="flex gap-2 lg:pl-28 md:pl-24 items-center">
                                <p>{user.email}</p>
                                <button onClick={handalSignOut} className="py-2 px-4 rounded-lg bg-red-600 text-xs border-none text-white">Sign Out</button>
                            </div>
                            :
                            <Link to={'/login'} className="navbar-end 
                             pl-32 md:pl-48 ">
                                <button className="py-2 px-4 rounded-lg bg-red-600 border-none text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;