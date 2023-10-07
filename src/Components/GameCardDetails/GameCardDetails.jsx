import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GameCardDetailsShow from "../GameCardDetailsShow/GameCardDetailsShow";


const GameCardDetails = () => {
    const [showDetailsCard,setShowDetailsCard] = useState() 
    console.log(showDetailsCard);
    const {id} =useParams()
    const gameCards = useLoaderData();
    useEffect(()=> {
        const findCard = gameCards?.find((showDetailsCard) => showDetailsCard.id == id)
        setShowDetailsCard(findCard)
    },[id,gameCards])


    return (
        <div>
            <GameCardDetailsShow showDetailsCard={showDetailsCard} key={id} ></GameCardDetailsShow>
        </div>
    );
};

export default GameCardDetails;