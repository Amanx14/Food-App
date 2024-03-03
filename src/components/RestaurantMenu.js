import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const param = useParams();
    // console.log(param);

    const { resId } = param;
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId); // custom hook

    // console.log("resinfo", resInfo?.data);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />
    }

    const dummy = "Dummy Data";

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
        c.card?.["card"]?.["@type"].includes("ItemCategory")
    ));

    // console.log("Item Category", categories);

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>

            {
                categories.map((category, index) => (
                    <RestaurantCategory key={index} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=> setShowIndex(index)} dummy={dummy}/>
                ))
            }   

        </div>
    );
}

export default RestaurantMenu;