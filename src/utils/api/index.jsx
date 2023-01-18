export async function LogementLoader() {
    const response = await fetch('http://localhost:4000/logements');
    return response.json()
}


export async function idLogementLoader({ params }) {
    const { id } = params
    const response = await fetch('http://localhost:4000/logements/' + id)
    return response.json()
}