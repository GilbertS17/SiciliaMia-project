import React from "react"
import siciliaLogo from "../images/sicilia.jpg"
//using fontawesome to import the search logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="https://www.siciliamia.com/" target="_blank"><img src={siciliaLogo} alt="Sicilia-logo" className="sicilia-logo"/></a>
            <div>
                <input type="text" className="search-api" placeholder="Search..."/>
                <button type="submit"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
            </div>
        </div>
    )
}