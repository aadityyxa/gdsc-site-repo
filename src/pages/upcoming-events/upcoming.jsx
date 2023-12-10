import Footer from "../../common-components/footer/footer";
import eventImage from '../../assets/events-images/Rectangle 50.png';
import './upcoming.css';
import EventHero from "./event-hero";
import Navbar from "../../common-components/navbar/navbar";
import eventImage2 from '../../assets/events-images/upcoming-events-image.png';
import registerPhoto from '../../assets/events-images/registration button images/Group 49.png';
import locationPhoto from '../../assets/events-images/Rectangle 52.png';
import locationIcon from '../../assets/events-images/registration button images/Group 24.png';

export default function UpcomingEvents() {

    const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit nisi laborum sunt repellendus obcaecati tenetur, explicabo error numquam harum quos velit, dolor, dolorum beatae maiores nesciunt aliquam sapiente est?'

    const imgArr = [eventImage]

    return(
        <>
            <Navbar />
            <EventHero eventTitle='GDSC WOW' eventDescription={desc} eventImages={imgArr}/>

            <div className="agenda-section">

                <div className="agenda-wrapper">
                    <h1>Agenda</h1>

                    <div className="agenda-events">
                        <div className="agenda-dates">
                            <span>16th April</span>
                            <span>17th April</span>
                            <span>18th April</span>
                        </div>

                        <div className="agenda-event-details">
                            <ul>
                                <li>Guest Lecture 1</li>
                                <li>Guest Lecture 2</li>
                                <li>Guest Lecture 3</li>
                            </ul>

                            <div>
                                April 16th, Wednesday 5:00 P.M.
                            </div>
                        </div>
                    </div>

                        
                    </div>
                </div>

                <div className="event-registration">
                            <img src={eventImage2} alt="" className="event-registration-image"/>

                            <div className="event-registration-details">
                                <span>16th April 2023 - 18th April 2023</span>
                                <div className="event-registration-title">
                                    <h2>VK Hall, MIT-World Peace University Kothrud,Pune</h2>
                                </div>

                                <div className="event-registration-buttons">
                                    <button className="er-button">
                                        <img src={registerPhoto} alt="" />
                                        Register 
                                    </button>

                                    <button className="er-button">
                                        <img src={locationPhoto} alt="" />
                                        <img src={locationIcon} alt="" className="location-icon"/>
                                        View on google maps
                                    </button>
                                </div>
                            </div>
                        </div>

            <Footer />
            
        </>
    )
}
