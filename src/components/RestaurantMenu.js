import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const param = useParams();
    // console.log(param);
    const {resId} = param;

    async function fetchMenu() {
        try {
            const response = await axios.get(MENU_API_URL + resId);

            const data = await response.data;

            setResInfo(data);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchMenu();
    }, [])

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