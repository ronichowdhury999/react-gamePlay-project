import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div>
            <div className="bg-base-200 pb-16">
                <div className=" flex-col lg:w-2/4 md:w-2/3 w-4/5 mx-auto">
                    <div className="">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl text-center py-8 font-bold">Please Register </h1>
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
                                <button className="btn bg-red-500 text-white hover:bg-red-800">Login</button>
                            </div>
                            <div className="text-center mt-4">
                                <p>You have an accout <Link className="pl-8 font-semibold" to='/login'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;