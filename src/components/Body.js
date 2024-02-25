import RestaurantCard, { withHigherRating } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_MAIN_API } from "../utils/constants";

const Body = () => {
    // State Variable
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const HighRatedRestraunt = withHigherRating(RestaurantCard); // HIgher order

    // Use Effect

    const fetchData = async () => {
        const response = await axios.get(SWIGGY_MAIN_API); // using Async and await to resolve promise


        const data = await response.data;

        // Conditional Rendering
        setListofRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log("line 31", listOfRestaurants.map((hotel) => hotel.info.avgRating));
    }


    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus(); // custom hook

    if (onlineStatus === false) {
        return <>
            <h1> Looks like you're offline!</h1> <h2> Please check your internet connection.</h2>
        </>
    }

    return (
        <div className="body mx-auto">
            {listOfRestaurants.length === 0 && <Shimmer />}
            {listOfRestaurants.length > 0 && (
                <div className="filter flex justify-between">
                    <div className="search">
                        <input
                            type="text"
                            className="border border-solid border-black w-[300px] rounded-sm mx-5 p-[6px] focus:outline-none focus:border-green-300"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button
                            className="px-4 py-2 rounded-md bg-green-500 m-4 text-white hover:scale-105 duration-150"
                            onClick={() => {
                                const filteredRestaurant = listOfRestaurants.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurant(filteredRestaurant);
                            }}
                        >
                            Search
                        </button>
                    </div>

                    <button
                        className="px-4 py-2 rounded-md bg-green-500 m-4 text-white hover:scale-105 hover:bg-green-600 duration-300"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            )}
            {listOfRestaurants.length > 0 && (
                <div className="res-container flex flex-wrap">
                    {filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>

                            {
                                restaurant.info.avgRating >= 4.5 ? (<HighRatedRestraunt resData={restaurant} />)
                                :    (<RestaurantCard resData={restaurant} />)
                            }

                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;