import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivaiteRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const locatoin = useLocation()
    if(loading){
        return <div className=" text-center pt-4"><span className="loading loading-spinner text-secondary"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={locatoin.pathname} to="/login"></Navigate>;

};
PrivaiteRoute.propTypes = {
    children: PropTypes.object
};

export default PrivaiteRoute;