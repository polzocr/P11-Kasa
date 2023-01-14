import logo from '../../assets/footer/Vector-footer.svg'
import './index.css'

function Footer(){
    return(
        <footer>
            <div className="footer-logo">
                <span>K</span>
                <img src={logo} alt='logo kasa' />
                <span>s</span>
                <span>a</span>
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer