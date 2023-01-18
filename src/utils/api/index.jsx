export async function LogementLoader() {
    const response = await fetch('http://localhost:4000/logements');
    if (!response.ok) {
        throw { message: "Impossible de recupérer les données, serveur down", status: 403 }
    }
    return response.json()
}


export async function idLogementLoader({ params }) {
    const { id } = params
    const response = await fetch('http://localhost:4000/logements/' + id)
    if(!response.ok){
        throw {message: "Ce logement n'existe pas !", status: 401}
    }
    return response.json()
}