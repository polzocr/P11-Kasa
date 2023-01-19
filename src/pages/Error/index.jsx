import { Link } from "react-router-dom"
import './index.css'

function ErrorPage() {
    return (
        <main>
            <div className="error-page">
                <p>404</p>
                <p>Oups! la page que vous demandez n'existe pas.</p>
                <Link to="/" className="error-page-link">Retourner sur la page d'accueil</Link>
            </div>
        </main>
    )
}

export default ErrorPage