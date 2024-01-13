import EventCard from "./event-card";

export default function EventsGrid() {

    return(
        <>
            <div className="events-section">
                <div className="upcoming-events">
                    <h3>Upcoming</h3>
                    <div className="events-grid">
                    <EventCard eventTitle='TEDX - SUNDAR PICHAI' eventDesc = 'Term Summary 2022-23, Google AI' eventDate = '4th February' to='/upcoming' />

                    <EventCard eventTitle='GDSC WOW' eventDesc = 'Enrich your proficiency in sustaining and emerging technologies' eventDate = '4th February' to='/upcoming'/>

                    <EventCard eventTitle='Flutterfest Hackathon' eventDesc = 'Immersive and engaging App Development Hackathon taking place on the 28th and 29th of April 2023' eventDate = '4th February' to='/upcoming'/>
                    </div>
                </div>

                <div className="past-events">
                    <h3>Past</h3>
                    <div className="events-grid">
                        <EventCard eventTitle='Opportunity Track' eventDesc = 'Immersive and engaging App Development Hackathon taking place on the 28th and 29th of April 2023' eventDate = '4th February' to='/past'/>

                        <EventCard eventTitle='Android Seekho' eventDesc = 'Equipping you with the knowledge and tools necessary to create innovative and cutting-edge mobile applications.' eventDate = '4th February' to='/past'/>
                    </div>
                </div>

            </div> 
        </>
    )
}