import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footers/Footer";


const Roots = () => {
    return (
        <div className="">
            <div className="max-w-[1300px] mx-auto">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Roots;