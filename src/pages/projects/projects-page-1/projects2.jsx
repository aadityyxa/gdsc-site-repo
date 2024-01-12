import Navbar from "../../../common-components/navbar/navbar";
import Footer from '../../../common-components/footer/footer'; 
import arrowLeft from '../../../assets/events-images/Vector 18.svg';
import projectImage from '../../../assets/events-images/Rectangle 50.png'; 
import mediumIcon from '../../../assets/miscellaneous/image 5.png'; 
import teamMemberImage from '../../../assets/podcast-images/user-outline.png'; 
import MemberCard from '../../members/team-member-card.jsx'; 
import ProjectSlider from "./project-slider.jsx";



export default function Projects2() {

    return (
        <>
            <Navbar />
            <div className="events-heading-section upcoming-events-heading">
                    <div>
                        <button><img src={arrowLeft} alt="" /></button>
                    </div>

                    <div>

                    </div>

                    <h1>PROJECTS</h1>
            </div>

            <div className="article-section">
                <h1>How you can train an AI to convert your design mockups into HTML and CSS</h1>

                <p className="project-desc">Get ready for an exhilarating journey into the world of Android app development as we proudly present &ldquo;Android Seekho&rdquo; Season 2! This immersive event is designed to empower aspiring developers and enthusiasts alike, equipping them with the knowledge and tools necessary to create innovative and cutting-edge mobile applications.</p>
            </div>

            <ProjectSlider />


            <a id='medium-link'>Read a detailed article about this project on Medium <img src={mediumIcon} alt="" /></a>

            <div className="project-members">

                    <h1>Who worked on this project?</h1>

                    <div className="project-member-grid">
                        <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                        <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                        <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                        <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    </div>
            </div>


            <Footer />



        </>
    )
}