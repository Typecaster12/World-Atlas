import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    //state for menuButton;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="nav-container">
                <div className="nav-content">
                    <div className="logo">
                        <NavLink to="/">
                            <h1>World Atlas</h1>
                        </NavLink>
                    </div>


                    <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        ☰
                    </button>


                    <nav>
                        <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
                            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                            <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                            <li><NavLink to="/country" className="nav-link">Country</NavLink></li>
                            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;