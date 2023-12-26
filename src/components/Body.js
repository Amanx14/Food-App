import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
    // State Variable
    const [listOfRestaurants, setListofRestaurants] = useState([]);

    // const arr = useState(resList);
    // const [listOfRestaurants, setListofRestaurants] = arr;
    // const listOfRestaurants = arr[0];
    // const setListofRestaurants = arr[1];
    
    // Use Effect

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6286706&lng=77.36402570000001"); // using Async and await to resolve promise

        const json = await data.json();

        console.log(json);

        setListofRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants); 
    }

    if(listOfRestaurants.length === 0) {
        return <h1>Loading......</h1>
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