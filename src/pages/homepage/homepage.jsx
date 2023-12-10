import Navbar from '../../common-components/navbar/navbar'
import Hero from '../../common-components/hero/hero'
import Footer from '../../common-components/footer/footer'
import './homepage.css'
import Slider from '../../common-components/slider/slider'


export default function Homepage() {

    document.title = "GDSC | Home"; 

    return(
        <>
            <Navbar></Navbar>
            <Hero buttonStatus primaryText='GDSC' secondaryText='MIT-WPU' spanText='' buttonText='Join Us' navigateTo='/join'></Hero>
            <div className="homepage-about-wrapper">
                <div className="homepage-about-card">
                    <div className="homepage-about-header">
                        <h2>About GDSC</h2>
                        <h2>MIT-WPU</h2>
                    </div>

                    <div className="homepage-about-desc">
                        <div className="white-line"> &nbsp;</div>
                        <p>At GDSC MIT-WPU, we nurture a culture of creativity and collaboration. We aim to explore endless possibilities of technology, with the support and guidance of a warm community.</p>
                    </div>
                </div>
            </div>

            <div className="heading-section slider-heading">
                <div>
                    <span>Members</span>
                    <span>Contact us</span>
                </div>

                <div>

                </div>

                <h1>WHAT DO</h1>
                <h1>WE DO?</h1>
            </div>
            <Slider />
            

            <Footer />
        </>
    )
}