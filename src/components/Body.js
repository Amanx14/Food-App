import RestaurantCard from "./RestaurantCard";
import resList from '../utils/mockData'
import { useState, useEffect } from "react";

const Body = () => {
    // State Variable
    const [listOfRestaurants, setListofRestaurants] = useState(resList);

    // const arr = useState(resList);
    // const [listOfRestaurants, setListofRestaurants] = arr;
    // const listOfRestaurants = arr[0];
    // const setListofRestaurants = arr[1];
    
    // Use Effect

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=28.622405992933555&lng=77.36806547034614'); // using Async and await to resolve promise

        const json = await data.json();

        console.log(json);
    }

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