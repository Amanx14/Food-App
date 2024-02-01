import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // State Variable
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Use Effect

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"); // using Async and await to resolve promise
        
        // if (!data.ok) {
        //     throw new Error('Network response was not ok');
        // }
        const json = await data.json();

        console.log(json);

        // Conditional Rendering
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer/>
    // }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" 
                    onClick={()=> {
                        // Filter the restraunt list
                        
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) // search karne pe filter ho jaye
                        );

                        setFilteredRestaurant(filteredRestaurant);
                        
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        res => res.info.avgRating > 4.5
                    );    

                    setFilteredRestaurant(filteredList);

                    console.log(filteredList);

                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant)=> {
                        return <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                    })   
                }
            </div>
        </div>
    );
}

export default Body;