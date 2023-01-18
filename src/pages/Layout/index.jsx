import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        <div>
            <Header />
            <Outlet context={'baby'}/>
            <Footer />
        </div>
    )
}

export default Layout