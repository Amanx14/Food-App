import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {resData} = props; // destructuring
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resData?.info // optional chaining

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}

export default RestaurantCard;