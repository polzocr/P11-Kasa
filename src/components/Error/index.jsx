import { Link } from "react-router-dom"

function Error(){
    return (
        <section>
            <p>404</p>
            <p>Oups! la page que vous demandez n'exiwste pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>  
        </section>
    )
}

export  default Error