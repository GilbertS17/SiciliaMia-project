import React from "react"
import siciliaLogo from "../images/sicilia.jpg"

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="https://www.siciliamia.com/" target="_blank"><img src={siciliaLogo} alt="Sicilia-logo" className="sicilia-logo"/></a>
            <div>
                <input type="text" className="search-api" placeholder="Search..."/>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}