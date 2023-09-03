import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineCancel } from "react-icons/md"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="header">
            <div className="left">
                <Link to="/" >
                    <img className="headerIcon" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
                </Link>
            </div>
            <div className="menu" onClick={toggleMenu}>
                {menuOpen ? <MdOutlineCancel /> : <GiHamburgerMenu />}
            </div>
            <div className={`right ${menuOpen ? 'show' : ''}`}>
                <Link to="/movies/popular" className="textLink"><span>Popular</span></Link>
                <Link to="/movies/top_rated" className="textLink"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" className="textLink"><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header;
