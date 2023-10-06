import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Roots = () => {
    return (
        <div className="bg-[#202121]">
            <div className="max-w-[1300px] mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};

export default Roots;