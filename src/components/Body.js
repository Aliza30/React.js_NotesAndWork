import ResturantCard from "./ResturantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {

    const [listOfRes, setlistOfRes] = useState([]);
    const [filterRes, setFilterRes] = useState([]);
    const [serchtext, setSerchText] = useState(""); //initially empty.


    console.log("body Render")

    useEffect(() => {
        fetchData();
        console.log(`useEffect`)
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();

        setlistOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if (listOfRes.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="test" className="search-box" value={serchtext} onChange={(e) => { setSerchText(e.target.value) }}></input>
                    <button onClick={() => {
                        //filter the resturant btn and update the ui cards
                        //Search text
                        const filterredRest = listOfRes.filter((res) => res?.info?.name.toLowerCase().includes(serchtext.toLowerCase()))
                        console.log(serchtext)
                        setFilterRes(filterredRest)
                    }}> Search </button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filter = listOfRes.filter(
                            (res) => res.info.avgRating > 4.0,
                        )
                        setlistOfRes(filter);
                    }}> filter btn</button>
            </div>
            <div className="res-container">
                {/* //Resturent card
                before map we where using 
                <  ResturantCard resData={resList[0]}  />
                 */}

                {/* map the data */}
                {/* very powerful line ----> */}
                {
                    filterRes?.map((resturant) => <ResturantCard key={resturant?.info?.id} resData={resturant} />)
                }
            </div>
        </div >
    )
}
export default Body