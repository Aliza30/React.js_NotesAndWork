import React from "react";
import { useEffect } from "react";
const ResturantMenu = () => {
    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = data.json();
        console.log(jsonData)
    }

    return (
        <div className="menu">
            <h1> Name of the Resturant </h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Biryani</li>
                <li>Biryani</li>
            </ul>
        </div>
    );
};
export default ResturantMenu