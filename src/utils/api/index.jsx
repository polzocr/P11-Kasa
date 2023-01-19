export async function getLogements() {
    const response = await fetch('http://localhost:4000/logements');
    if (!response.ok) {
        throw { message: "Impossible de recupérer les données, serveur down", status: 403 }
    }
    return response.json()
}


export async function getOneLogement(id) {
    const response = await fetch('http://localhost:4000/logements/' + id)
    if(!response.ok){
        throw {message: "Ce logement n'existe pas ou le connexion au serveur n'est pas possible", status: 401}
    }
    return response.json()
}

