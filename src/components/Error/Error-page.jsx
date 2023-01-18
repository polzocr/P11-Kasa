import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError()
    return (
        <section className="error-page">
            <p>{error.status}</p>
            <p><i>{error.statusText || error.message}</i></p>
        </section>
    )
}

export default ErrorPage