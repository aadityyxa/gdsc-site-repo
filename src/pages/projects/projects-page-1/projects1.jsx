import './projects1.css'; 
import Navbar from '../../../common-components/navbar/navbar';
import Footer from '../../../common-components/footer/footer';
import projectImage from '../../../assets/events-images/Rectangle 50.png'; 
import PropTypes from 'prop-types'; 

export default function Projects1() {
    

    return(
            <>
                <Navbar />
                <div className="events-heading-section upcoming-events-heading">
                    <div>
                    </div>

                    <div>

                    </div>

                    <h1>PROJECTS</h1>
                </div>

                <div className="projects-section">
                    <div className="project-card">
                        <h2>Why Designers should move from px to rem (and how to do that in Figma)</h2>
                        <p>If you are anything like me, you happily used Pixel (px) in Sketch and Figma during the past years without thinking much about it. It is the...</p>

                        <div className="date-length">
                            <span>3rd March, 2023</span>
                            &middot; 
                            <span>8 min read</span>
                        </div>

                        <img src={projectImage} alt="" className='project-image'/>
                    </div>

                    <div className="project-card">
                        <h2>Why Designers should move from px to rem (and how to do that in Figma)</h2>
                        <p>If you are anything like me, you happily used Pixel (px) in Sketch and Figma during the past years without thinking much about it. It is the...</p>

                        <div className="date-length">
                            <span>3rd March, 2023</span>
                            &middot; 
                            <span>8 min read</span>
                        </div>

                        <img src={projectImage} alt="" className='project-image'/>
                    </div>
                </div>

                <Footer />

            </>


    )
}

Projects1.propTypes = {
    projectTitle:PropTypes.string,
    projectDesc:PropTypes.string,
}




