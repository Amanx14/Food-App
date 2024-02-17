import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props; // destructuring
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info // optional chaining

    return (
        <div className="m-4 p-3 w-[220px] rounded-md bg-slate-100 hover:shadow-2xl hover:scale-105 duration-300 hover:bg-slate-300">
            <img className="rounded-md" src={CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl py-2">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;