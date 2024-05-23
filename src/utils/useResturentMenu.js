
import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useResturentMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL + resId
        );
        const jsonData = await data.json();
        // console.log(jsonData?.data?.cards[2]?.card.card?.info);
        setResInfo(jsonData.data);

        console.log(`using custom hook`)
    };
    return resInfo

}

export default useResturentMenu;