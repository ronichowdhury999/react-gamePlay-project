import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import './Cards.css'

const Cards = () => {
    const cards = useLoaderData()
    console.log(cards);
    return (
        <div className="lg:pt-24 pt-14">
            <div className="text-white lg:text-3xl text-xl  font-bold font-serif text-center">
                <h3>The best Gamming Event of Games and Car ,Fighter, Fire , Guns,Gamming... </h3>
            </div>
            <div className="grid card-bg lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 gap-6 lg:p-0 md:p-2 p-4">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;