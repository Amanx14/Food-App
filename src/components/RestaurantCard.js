import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props; // destructuring
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info // optional chaining

    return (
        <div className="m-4 p-3 w-[220px] rounded-md bg-slate-100 hover:shadow-2xl hover:scale-105 duration-300 hover:bg-slate-300">
            <div className="rounded-md bg-cover w-[auto] h-[150px]" style={{backgroundImage : `url(${CDN_URL+cloudinaryImageId})`}}> </div>
            <h2 className="font-bold text-xl py-2">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

// Higher Order Components

export const withHigherRating = (RestaurantCard) => {
    return (props)=> {
        return (
            <div className="relative">
                <label className="absolute left-1 bg-slate-900 text-white z-auto m-2 px-3 rounded-sm">Elite</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;