import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Header(){
    return(
            <header className="site-header">
                <div className="container">
                    <div className="logo-nav-div">
                        <div className="logo-div">
                            <Link to="/">
                                <img src={require('../images/logo.png').default} alt="VIVID WEB SOLUTIONS" />
                            </Link>
                        </div>
                        <div className="navigation-div">
                            <div className="hamburger" id="hamburger-1">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/service">Service</Link>
                                    <ul>
                                        <li><Link to="yatin">Web Development</Link></li>
                                        <li><Link to="#">Web Development</Link></li>
                                        <li><Link to="#">Web Development</Link></li>
                                        <li><Link to="#">Web Development</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        
    );
}
export default Header;