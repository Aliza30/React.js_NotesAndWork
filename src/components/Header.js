
import { LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="loginBtn"
                        onClick={() => {
                            //toggel funtion
                            btnName === "Login" ?
                                setBtnName("LogOut") :
                                setBtnName("Login");
                        }}>
                        {btnName}

                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;