import React from 'react';
import './router.css';
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h3>logo</h3>
            <ul className="nav-links">
                <Link style={{ color: "white" }} to="/"><li>Home</li></Link>
                <Link style={{ color: "white" }} to="about"><li>About</li></Link>
                <Link style={{ color: "white" }} to="shop"><li>Shop</li></Link>
                <Link style={{ color: "white" }} to="contact"><li>Contact Us</li></Link>
            </ul>
        </nav>
    )
}
