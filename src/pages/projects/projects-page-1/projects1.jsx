import './projects1.css'; 
import Navbar from '../../../common-components/navbar/navbar';
import Footer from '../../../common-components/footer/footer';
import projectImage from '../../../assets/events-images/Rectangle 50.png'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 


export default function Projects1() {

    window.onload = window.scrollTo(0,0); 

    document.title = "GDSC | Projects"
    

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
                <Link to='/project'>
                    <div className="project-card">
                        <h2>How you can train an AI to convert your design mockups into HTML and CSS</h2>
                        <p>Get ready for an exhilarating journey into the world of Android app development as we proudly present “Android Seekho” Season 2! This immersive event is designed to empower aspiring developers and enthusiasts alike, equipping them with the knowledge and tools necessary to create innovative and cutting-edge mobile applications.</p>

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
                </Link>
                </div>


                <Footer />

                

            </>


    )
}

Projects1.propTypes = {
    projectTitle:PropTypes.string,
    projectDesc:PropTypes.string,
}




