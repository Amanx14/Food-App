import { useContext, useEffect, useState } from "react";
import LOGO_URL from "../utils/constants";

import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [buttonName, setButtonName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    return (
        <div className="flex justify-between shadow-lg px-3 mb-2 sm:bg-slate-50">
            <div className="logo-container p-2 w-[140px]">
                <img className="w-40 rounded-2xl p-2" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex gap-8 font-semibold items-center">
                    <li className="p-2 rounded-md hover:bg-green-400 hover:text-white">
                        Online Status {onlineStatus ? '✅' : '❌'}
                    </li>
                    <li className="p-2 rounded-md hover:bg-green-400 hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2 rounded-md hover:bg-green-400 hover:text-white">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-2 rounded-md hover:bg-green-400 hover:text-white">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-2 rounded-md hover:bg-green-400 hover:text-white">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className="p-2 rounded-md hover:bg-green-400 hover:text-white">Cart</li>
                    <button className="bg-green-500 px-4 py-2 rounded-md text-white" onClick={() => {
                        if (buttonName === 'Login') {
                            setButtonName("Logout");
                        }
                        else {
                            setButtonName("Login");
                        }

                    }}>{buttonName}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;