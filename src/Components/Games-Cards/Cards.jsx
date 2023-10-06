import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import './Cards.css'

const Cards = () => {
    const cards = useLoaderData()
    console.log(cards);
    return (
        <div className="grid card-bg lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-24 gap-6 lg:p-0 md:p-2 p-4">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;