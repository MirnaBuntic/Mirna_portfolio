import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <button className="hamburger" onClick={() => setOpen(!open)}>
                <i className={`fas ${open ? "fa-times" : "fa-bars"}`}></i>
            </button>
            <nav className={`nav ${open ? "open" : ""}`}>
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/projects">Projekter</Link></li>
                    <li><Link to="/about">Om meg</Link></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    )
}