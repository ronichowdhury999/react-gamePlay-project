import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <div className="navbar text-white">
                    <div className="navbar-start">
                        <a className="font-bold lg:text-2xl text-lg">Game <span className="text-red-600">Play</span></a>
                    </div>
                    <div className="navbar-center ">
                        <ul className="lg:text-xl text-xs font-semibold flex lg:gap-10 gap-3 px-1">
                        <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/'}>Home</NavLink></li>

                            <li> <NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/about'}>About us</NavLink> </li>

                            <li><NavLink className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'text-red-600 underline' : ''} to={'/Contact'}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/login'} className="navbar-end">
                        <button className="py-2 px-4 rounded-lg bg-red-600 border-none text-white">Login</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;