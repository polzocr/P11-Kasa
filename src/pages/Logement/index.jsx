import { useParams } from "react-router-dom"

function Logement(){
    const { id } = useParams()
    return (
        <div>VOICI MA PAGE LOGEMENT: {id} </div>
    )
}

export default Logement