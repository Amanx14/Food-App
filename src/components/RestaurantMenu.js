import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const param = useParams();
    // console.log(param);

    const { resId } = param;
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId); // custom hook

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
        c.card?.["card"]?.["@type"].includes("ItemCategory")
    ));

    console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            
            {
                categories.map((category) =>(<RestaurantCategory data = {category?.card?.card}/>))
            }
            
        </div>
    );
}

export default RestaurantMenu;