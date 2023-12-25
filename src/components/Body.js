import RestaurantCard from "./RestaurantCard";
import resList from '../utils/mockData'
import { useState } from "react";

const Body = () => {
    // State Variable
    const [listOfRestaurants, setListofRestaurants] = useState(resList);

    // const arr = useState(resList);
    // const [listOfRestaurants, setListofRestaurants] = arr;
    // const listOfRestaurants = arr[0];
    // const setListofRestaurants = arr[1];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        res => res.info.avgRating > 4.5
                    );    
                    setListofRestaurants(filteredList);
                    console.log(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant)=> {
                        return <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                    })   
                }
            </div>
        </div>
    );
}

export default Body;