import Hero from '../../common-components/hero/hero.jsx';
import Navbar from '../../common-components/navbar/navbar.jsx';
import Footer from '../../common-components/footer/footer.jsx';
import EventsGrid from './events-grid.jsx';
import './events.css'

export default function Events() {
    
    document.title = 'GDSC | Events';

    return(
        <>
            <Navbar />
            <Hero buttonStatus={false} primaryText='EVENTS' secondaryText='' spanText='' />
            <EventsGrid />          
            <Footer />
        </>
    )
}