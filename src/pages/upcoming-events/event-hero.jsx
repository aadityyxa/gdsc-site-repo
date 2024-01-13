import { mdiInstagram, mdiTwitter, mdiLinkedin } from "@mdi/js"
import Icon from "@mdi/react"; 
import { PropTypes } from 'prop-types';
import arrowLeft from '../../assets/events-images/Vector 18.svg';
import { Link } from 'react-router-dom'; 

export default function EventHero({heroTitle, eventTitle, eventDescription, eventImages}) {


    return(
        <>
            <div className="event-hero">

                <div className="events-heading-section upcoming-events-heading">
                    <div>
                        <button><Link to='/'><img src={arrowLeft} alt="" /></Link></button>
                    </div>

                    <div>

                    </div>

                    <h1>{heroTitle}</h1>
                </div>

                <div className="hero-content">
                    <div className="upcoming-event-details">
                        <h1>{eventTitle}</h1>
                        <ul>
                            <Icon path={mdiInstagram} size={1}/>
                            <Icon path={mdiTwitter} size={1}/>
                            <Icon path={mdiLinkedin} size={1}/>
                        </ul>

                        <div className="event-desc">
                            {eventDescription}
                        </div>
                    </div>

                    <div className="event-images">
                        <div className="image-frame">
                            <div className="images">
                                {eventImages.map((image) => {
                                    return <img src={image} key={eventImages.indexOf(image)}/>
                                    
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

EventHero.propTypes = {
    heroTitle:PropTypes.string,
    eventTitle: PropTypes.string,
    eventDescription:PropTypes.string,
    eventImages:PropTypes.array

}

