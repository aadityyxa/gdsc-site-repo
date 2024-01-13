import EventHero from "../upcoming-events/event-hero"
import Footer from "../../common-components/footer/footer"
import eventImage from '../../assets/events-images/Rectangle 50.png';
import Navbar from "../../common-components/navbar/navbar";
import browseMoreEventsImage from '../../assets/events-images/Group 31.png'; 
import './past.css';

export default function PastEvents() {

    const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit nisi laborum sunt repellendus obcaecati tenetur, explicabo error numquam harum quos velit, dolor, dolorum beatae maiores nesciunt aliquam sapiente est?'

    const imgArr = [eventImage]
    
    window.onload = window.scrollTo(0,0); 


    return(
        <>
            <Navbar />
            <EventHero heroTitle='PAST EVENTS' eventTitle='GDSC WOW' eventDescription={desc} eventImages={imgArr}/>

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

            <div className="past-image-slider">
                <div className="past-slider-wrapper">
                    <div className="past-frame">
                        <div className="past-image-container">
                            <img src={eventImage} alt="" />
                        </div>
                    </div>
                </div>

                <div className="progress-section">
                    <span>&lt;</span>
                    <div className="slider-progress-bar">
                        <div className="progress-bar"></div>
                    </div>
                    <span>&gt;</span>
                </div>
            </div>

            <div className="browse-events-section">
                <img src={browseMoreEventsImage} alt="" className="browse-events-image"/>
                <button className="browse-events-button">Browse More Events</button>
            </div>



            <Footer />

        </>
    )
}