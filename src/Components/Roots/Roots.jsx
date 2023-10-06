import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Roots = () => {
    return (
        <div className="">
            <div className="max-w-[1300px] mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Roots;