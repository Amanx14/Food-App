import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const param = useParams();
    // console.log(param);
    
    const {resId} = param;
    
    const resInfo = useRestaurantMenu(resId); // custom hook

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <ul>
                {
                    itemCards.map(
                        (items) => (
                            <li key = {items.card.info.id}> {items.card.info.name} - {items.card.info.price / 100} ₹ </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default RestaurantMenu;