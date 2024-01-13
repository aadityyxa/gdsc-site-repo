import './events.css'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 


export default function EventCard({eventTitle, eventDesc, eventDate, to}) {

    return(
        <div className="event-card">
            <div className='event-image'></div>
            <div className="event-details">
                <h3 className="event-title">{eventTitle}</h3>
                <span className="event-desc">{eventDesc}</span>
                <button className="event-details-button" ><Link to={to} id='white-text-links'>Details</Link></button>                  
            </div>
            <span className="event-date">{eventDate}</span>
        </div>
    )
}

EventCard.propTypes = {
    eventTitle:PropTypes.string,
    eventDesc:PropTypes.string,
    eventDate:PropTypes.string,
    to:PropTypes.string,
}

