import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //fetchdata
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        try {
            const response = await axios.get(MENU_API_URL + resId);
            const data = await response.data;
            setResInfo(data);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return resInfo;
}

export default useRestaurantMenu;