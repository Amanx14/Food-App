import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
    // console.log("----------", data.itemCards, data.title);
    const { title, itemCards } = data;

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4 rounded-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-xl">{title}</span>
                    <span><i className="fa-solid fa-angle-down"></i></span>
                </div>
                {showItems && <ItemList items={itemCards} dummy={dummy} />}
            </div>
        </div>
    );
}

export default RestaurantCategory;