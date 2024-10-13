import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handalSignOut = () => {
        logOut()
            .then()
            .catch()

    }
    return (
        <div className="grid grid-cols-3 items-center text-white">
         <div className="">
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
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/Contact'}>Contacts</NavLink></li>
                        {user ? <>
                            <li><p>{user.email}</p></li>
                            <button onClick={handalSignOut} className="py-2 px-4 rounded-lg bg-red-600 text-xs border-none text-white">Sign Out</button>
                        </>
                            :
                            <li>
                                <Link to={'/login'} className="navbar-end 
                             ">
                                    <button className="py-2 px-6 rounded-lg bg-red-600 border-none text-white">Login</button>
                                </Link>
                            </li>}
                    </ul>
                </div>
                <h3 className=" normal-case font-bold md:-mt-4 md:pl-0 pl-4 pb-2 font-serif lg:text-3xl text-xl">Play <span className="text-red-600">Game</span></h3>
         </div>
         <div className="">
                {/* large device ar jonno */}
                  <div className="hidden navbar-center md:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold font-serif">
                    <li className="hover:bg-red-600 hover:rounded-lg"><NavLink className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'text-red-600   underline' : ''} to={'/'}>Home</NavLink></li>

                    <li className="hover:bg-red-600 hover:rounded-lg"> <NavLink className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/about'}>About us</NavLink> </li>

                    <li className="hover:bg-red-600 hover:rounded-lg"><NavLink className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/Contact'}>Contacts</NavLink></li>
                </ul>
                 </div>
            {/* conditional section */}
           </div>
           <div className="flex justify-end">
                {
                    user ?
                        <div className="hidden navbar-center md:flex md:gap-4 ml-16">
                            <p>{user.email}</p>
                            <button onClick={handalSignOut} className="py-2 px-4 rounded-lg bg-red-600 text-xs border-none text-white">Sign Out</button>
                        </div>
                        :
                        <div className="hidden  md:flex md:gap-4">
                            <Link to={'/login'} className="navbar-end 
                             ">
                                <button className="py-2 px-4 rounded-lg bg-red-600 border-none text-white">Login</button>
                            </Link>
                        </div>
                }
           </div>
     </div>
    );
};

export default Header;