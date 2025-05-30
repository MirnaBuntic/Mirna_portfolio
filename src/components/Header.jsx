import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/projects">Projekter</Link></li>
                    <li><Link to="/about">Om meg</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    )
}