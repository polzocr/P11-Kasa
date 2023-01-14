import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError()
    console.error(error)
    return (
        <section>
            <p>404</p>
            <p>Oups! la page que vous demandez n'exiwste pas.</p>
            <p><i>{error.statusText || error.message}</i></p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default ErrorPage