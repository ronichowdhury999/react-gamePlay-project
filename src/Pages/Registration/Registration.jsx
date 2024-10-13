import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";


const Registration = () => {
    const location = useLocation();
    console.log(location.state);
    const navigate = useNavigate();

      

    const {createUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handalRegistration = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(password.length < 6) {
            setError('provide at lest 6 characters');
            return
        }else if (!/(?=.*?[A-Z])/.test(password)) {
            setError('At least one upper case letter');
            return
          }
          else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('At least one special letter');
            return
          }
        createUser(email,password).then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
            
        }).catch(err => {
            setError(err.message)
        })
       
    }
    return (
        <div>
            <div className="bg-base-200 pb-16">
                <div className=" flex-col lg:w-2/4 md:w-2/3 w-4/5 mx-auto">
                    <div>
                        <h1 className="lg:text-5xl md:text-4xl text-2xl text-center py-8 font-bold">Please Register </h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <p className="text-center text-sm pt-4">{error}</p>
                        <form className="card-body" onSubmit={handalRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered"
                                    required
                                    name="name"
                                    // value={email}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                    name="email"
                                    // value={email}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    // value={password}
                                    required
                                    name="password"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-500 text-white hover:bg-red-800">Registration</button>
                            </div>
                            <div className="text-center mt-4">
                                <p>You have an accout <Link className="pl-8 font-semibold" to='/login'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;