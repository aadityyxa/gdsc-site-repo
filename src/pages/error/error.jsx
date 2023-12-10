import Navbar from '../../common-components/navbar/navbar.jsx'
import Hero from '../../common-components/hero/hero.jsx'
import Footer from '../../common-components/footer/footer.jsx'


export default function Error() {

    document.title='Error'

    return(
        <>
            <Navbar />
            <Hero buttonStatus primaryText='ERROR 404:' spanText='Page Not Found' buttonText='Return To Homescreen' navigateTo='/'/>
            <Footer />
        </>
    )
}