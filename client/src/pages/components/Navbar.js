import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import WeatherForm from "./WeatherForm";

const Navbar = () => {
    return (
        <nav>
            <WeatherForm />
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


// import React from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar"> /* Added a more specific class for the nav container */
//       <h2 className="navbar-title app-name">ADROP</h2> /* Combined classes for title */
//       <br />
//       <ul className="navbar-links"> /* Added a class for the link list */
//         <li className="navbar-item"><Link className="navbar-link" to="/">Home</Link></li> /* Added classes for individual items and links */
//         <li className="navbar-item"><Link className="navbar-link" to="/forecast">Forecast</Link></li>
//         <li className="navbar-item"><Link className="navbar-link" to="/other">Other</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
