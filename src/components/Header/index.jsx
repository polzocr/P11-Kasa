import { Link } from "react-router-dom"
import logo from '../../assets/Vector.svg'

function Header() {
    return (
        <section>
            <div>
                <span>K</span>
                <img src={logo} alt='logo kasa' />
                <span>SA</span>
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </section>
    )
}
export default Header