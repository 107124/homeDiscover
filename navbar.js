import React from "react";

import Logo from "../images/homeDiscover.png"

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="center-nav-logo">
                    <img className="logo" src={Logo} alt="Home Discover" />
                </div>
                <div className="divide-nav"></div>
                <div className="links">
                    <a>Rent</a>
                    <a>Buy</a>
                    <a>Sell</a>
                    <a>Max</a>
                    <a>Beds</a>
                    <a>Type</a>
                </div>

            </div>
        )
    }
}