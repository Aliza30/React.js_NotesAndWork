import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResturantMenu = () => {

    const [resMenu, setResMenu] = useState(null);
    const { resId } = useParams();
    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL + resId
        );
        const jsonData = await data.json();
        // console.log(jsonData?.data?.cards[2]?.card.card?.info);
        setResMenu(jsonData.data);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    if (resMenu === null) return <Shimmer />


    const { name, avgRating, cuisines, costForTwoMessage } = resMenu?.cards[2]?.card?.card?.info || {};
    // console.log(name)
    const itemCards = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    // console.log(itemCards);
    // const { itemcard } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.itemCards
    // console.log(itemcard);
    return (
        <div className="menu">
            <h1> {name}</h1>
            <h3>Average Rating : {avgRating}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <ul>
                {itemCards.map(item =>
                    <li key={item?.card?.info?.id || index} >{item.card.info.name} : Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                )}

            </ul>
        </div>
    );
};
export default ResturantMenu;