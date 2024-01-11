import Navbar from '../../common-components/navbar/navbar.jsx'; 
import Hero from '../../common-components/hero/hero.jsx'; 
import teamMemberImage from '../../assets/podcast-images/user-outline.png'; 
import './members.css';
import MemberCard from './team-member-card.jsx';
import Footer from '../../common-components/footer/footer.jsx'

export default function Members() {

    document.title = "GDSC | Members"

    return(
        <>
            <Navbar />
            <Hero primaryText='MEMBERS'/> 

            <div className="page-content">

                <div className="our-team">
                    <h1>Our Team</h1>
                    <p>Meet our team, a passionate bunch of Developers, Designers, and Managers! Our team works round the clock to deliver the best possible experiences for our community!</p>
                </div>

                <div className="lead-cards">
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />

                </div>

                <ul className="member-fields">
                    <li>Content</li>
                    <li>Designers</li>
                    <li>Developers</li>
                    <li>Finance</li>
                    <li>Legal</li>
                    <li>Management</li>
                </ul>

                <div className="field-cards">
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
                    <MemberCard teamMemberImage={teamMemberImage} name='John Doe' designation = 'Developer' />
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