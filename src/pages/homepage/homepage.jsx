import Navbar from '../../common-components/navbar/navbar'
import Hero from '../../common-components/hero/hero'
import Footer from '../../common-components/footer/footer'
import './homepage.css'

export default function Homepage() {

    return(
        <>
            <Navbar></Navbar>
            <Hero buttonStatus></Hero>
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

            <div className="slider-heading-section">
                <div>
                    <span>Members</span>
                    <span>Contact us</span>
                </div>

                <div>

                </div>

                <h1>WHAT DO</h1>
                <h1>WE DO?</h1>
            </div>

            <div className="image-slider">
                
            </div>

            <Footer />
        </>
    )
}