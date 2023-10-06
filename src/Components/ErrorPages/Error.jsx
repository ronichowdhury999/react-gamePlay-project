import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h3 className="text-center text-4xl font-bold">error</h3>
            <Link to={'/'}> Home</Link>
            
        </div>
    );
};

export default Error;