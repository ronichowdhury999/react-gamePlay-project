import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Login = () => {
    const { googleSingIn } = useContext(AuthContext);
    const handalGoogle = () => {
        googleSingIn().then(result => {
            console.log(result.user);
        })
    }
    return (
        <div>
            <div className="bg-base-200 pb-16">
                <div className=" flex-col lg:w-2/4 md:w-2/3 w-4/5 mx-auto">
                    <div className="">
                        <h1 className="text-5xl text-center py-8 font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-red-800 bg-red-500 text-white">Login</button>
                            </div>
                            <div className="text-center mt-4">
                                <p>Do not have an accout <Link className="lg:pl-8 pl-2 font-semibold" to='/registration'>Registration</Link></p>
                            </div>
                            <div className="text-center"><button  onClick={handalGoogle} className="btn hover:bg-red-800  bg-red-600 text-white border-none">Google</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;