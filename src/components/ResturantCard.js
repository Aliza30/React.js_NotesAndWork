import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    // console.log(props);
    //props is now a js object
    const { resData } = props
    //Destructuring the code for better n clean code
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "pink", }}>
            <img className="res-logo"
                alt="res-logo" src={
                    CDN_URL + cloudinaryImageId} />
            <h3> {name} </h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4> {costForTwo} </h4>
            <h4> {avgRating} rating </h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}
export default ResturantCard;