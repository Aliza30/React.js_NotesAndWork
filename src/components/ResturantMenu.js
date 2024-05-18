import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const ResturantMenu = () => {

    const [resMenu, setResMenu] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.843275&lng=80.994529&restaurantId=625181&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
        );
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.itemCards);
        setResMenu(jsonData.data);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    if (resMenu === null) return <Shimmer />


    const { name, avgRating, cuisines, costForTwoMessage } = resMenu?.cards[2]?.card?.card?.info || {};
    console.log(name)
    const itemCards = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards || [];
    console.log(itemCards);
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
                    <li>{item.card.info.name}</li>
                )}

            </ul>
        </div>
    );
};
export default ResturantMenu