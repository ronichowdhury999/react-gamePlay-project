import PropTypes from 'prop-types';


const GameCardDetailsShow = ({showDetailsCard}) => {
    const {title,picture,description}=showDetailsCard || [];
    return (
        <div>
            <div className="bg-base-100 shadow-xl">
                <div>
                <h3 className='lg:text-3xl text-2xl font-bold font-serif text-center pt-4 '>Game <span className='text-red-600'>Event</span> Details</h3>
                </div>
            <figure className="px-10 pt-10">
                <img src={picture}  alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{description}</p>
               
            </div>
        </div>
        </div>
    );
};
GameCardDetailsShow.propTypes = {
    showDetailsCard: PropTypes.object
};
export default GameCardDetailsShow;