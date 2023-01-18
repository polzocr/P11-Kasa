
function Contact(){

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <label>Nom</label>
            <br/>
            <input type="text" id="name"/>
            <br />
            <label>Ville</label>
            <br />
            <input type="text" id="city" />
            <br />
            <button type="submit">CONTACTEZ</button>
        </form>
    )
}

export default Contact