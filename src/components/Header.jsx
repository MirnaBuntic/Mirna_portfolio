import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToBottom from "./ScrollToBottom";

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
                    <li>
                        <button
                            onClick={() => {
                                ScrollToBottom();
                                setOpen(false);
                            }}
                            >
                            Kontakt
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}