import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Card = ({ card }) => {
    const { id, picture, title, description,price } = card || [];
    const sliceText =description.slice(0,85)
    return (
        <div>
            <div className="shadow-lg bg-gray-200">
                <figure><img className="w-full" src={picture} alt="" /></figure>

                <div className=" py-2 p-4">
                    <h2 className="text-xl font-bold py-2">{title}</h2>
                    <p className="text-gray-600">{sliceText}</p>
                </div>

                <div className="flex justify-between items-center p-4">
                    <div>
                    <p className="font-serif text-gray-600 font-semibold">Price:{price}</p>
                    </div>
                <div>
                <Link to={`/details/${id}`}>
                    <button className="btn bg-red-500 text-white">Details</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
};
export default Card