import logo from '../../assets/footer/Vector-footer.svg'

function Footer(){
    return(
        <footer style={{backgroundColor: "black"}}>
            <div>
                <span>K</span>
                <img src={logo} alt="logo kasa"/>
                <span>sa</span>
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer