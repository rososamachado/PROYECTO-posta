import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="contenedor">
            <header className="header">
                <nav className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/NotFound">Sobre Mi</Link>
                    <Link to="/Ilustraciones">Trabajos</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header