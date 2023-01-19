import { useRouteError } from "react-router-dom";
import './index.css'

function Error() {
    const error = useRouteError()
    return (
        <section className="error-page">
            <p>{error.status}</p>
            <p><i>{error.statusText || error.message}</i></p>
        </section>
    )
}

export default Error