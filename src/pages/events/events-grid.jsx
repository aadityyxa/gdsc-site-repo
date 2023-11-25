


export default function EventsGrid() {

    return(
        <>
            <div className="events-section">
                <div className="upcoming-events">
                    <h3>Upcoming</h3>
                    <div className="events-grid">
                        <div className="event-card">
                            <div className='event-image'></div>

                            <div className="event-details">
                                <h3 className="event-title">TEDX - SUNDAR PICHAI</h3>
                                <span className="event-desc">Term Summary 2022-23, Google AI</span>
                                <button className="event-details-button">Details</button>
                                

                            </div>
                            <span className="event-date">4th February</span>
                        </div>

                        <div className="event-card">
                            <div className='event-image'></div>

                            <div className="event-details">
                                <h3 className="event-title">GDSC WOW</h3>
                                <span className="event-desc">Enrich your proficiency in sustaining and emerging technologies</span>
                                <button className="event-details-button">Details</button>
                                <span className="event-date">25th December</span>
                            </div>
                        </div>

                        <div className="event-card">
                            <div className='event-image'></div>

                            <div className="event-details">
                                
                                <h3 className="event-title">FlutterFest Hackathon</h3>
                                <span className="event-desc">Immersive and engaging App Development Hackathon taking place on the 28th and 29th of April 2023.</span>
                                <button className="event-details-button">Details</button>
                                <span className="event-date">24th Sept</span>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="past-events">

                    <h3>Past</h3>
                    <div className="events-grid">

                        <div className="event-card">
                            <div className='event-image'></div>

                            <div className="event-details">

                                <h3 className="event-title">Opportunity Track</h3>
                                <span className="event-desc">DSC MEC proudly presents our new venture for the betterment of the students, the Opportunity track.</span>
                                <button className="event-details-button">Details</button>
                                <span className="event-date">28th June</span>
                            </div>
                        </div>

                        <div className="event-card">
                            <div className='event-image'></div>

                            <div className="event-details">
                                <h3 className="event-title">Android Seekho</h3>
                                <span className="event-desc">Equipping you with the knowledge and tools necessary to create innovative and cutting-edge mobile applications.</span>
                                <button className="event-details-button">Details</button>
                                <span className="event-date">25th June</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div> 
        </>
    )
}