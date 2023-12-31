import { useEffect, useState } from "react";
import LOGO_URL from "../utils/constants";

import { Link } from 'react-router-dom';

const Header = () => {

    const [buttonName, setButtonName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        if (buttonName === 'Login') {
                            setButtonName("Logout");
                        }
                        else {
                            setButtonName("Login");
                        }

                    }}>{buttonName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;