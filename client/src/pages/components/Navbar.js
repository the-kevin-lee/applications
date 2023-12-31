import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import WeatherForm from "./WeatherForm";

const Navbar = ({onCitySubmit}) => {
    return (
        <nav>
            <WeatherForm onCitySubmit={onCitySubmit} />
            <h2 className="app-name" >ADROP</h2>
            <br />
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/forecast">Forecast</Link></li>
                <li><Link className="link" to="/other">Other</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;


