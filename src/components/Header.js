import React from "react";
import { NavLink, Link } from "react-router-dom";
import ReactModal from "react-modal";

const Header = () => (
    <div className="header">
        <Link to="/" exact={true}><h1>Portofolio</h1></Link>
        <ul>
            <NavLink activeClassName="is-active" to="/" exact={true}><li>Home</li></NavLink>
            <NavLink activeClassName="is-active" to="/certificates"><li>Certificates</li></NavLink>
            <NavLink activeClassName="is-active" to="/about"><li>About</li></NavLink>
            <NavLink activeClassName="is-active" to="/contact"><li>Contact</li></NavLink>
        </ul>
    </div>
)

export default Header