import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {

    const [listOfRes, setlistOfRes] = useState(resList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filter = listOfRes.filter(
                        (res) => res.info.avgRating > 4.3,
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
                    listOfRes.map((resturant) => <ResturantCard key={resturant.info.id} resData={resturant} />)
                }
            </div>
        </div>
    )
}
export default Body