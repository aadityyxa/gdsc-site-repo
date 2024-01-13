import Navbar from '../../common-components/navbar/navbar.jsx';
import Hero from '../../common-components/hero/hero.jsx';
import Footer from '../../common-components/footer/footer.jsx';
import podcastImage from '../../assets/podcast-images/podcast-img.png';
import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js';
import './podcast.css';
import userOutline from '../../assets/podcast-images/user-outline.png'; 


export default function Podcast() {
    
    document.title = 'GDSC | Podcast'
    window.onload = window.scrollTo(0,0); 

    return (
        <>
            <Navbar />
            <Hero buttonStatus={false} primaryText='PODCAST'/>

            <div className="recent-section">
            
                <div className="recent-section-heading">
                    <h1>Recent</h1>
                    <span>On Ctrl+Alt+Develop</span>
                </div>

                <div className="recent-podcast-card">
                    <img src={podcastImage}/>

                    <div className="podcast-details-wrapper">
                    
                        <div className="recent-podcast-heading">
                            <span>Podcast Episode</span>
                            <h2>Episode 1 - Karthik Padmanabhan</h2>
                        </div>

                        <button><Icon path={mdiSpotify} size={1} color='black'/>Listen On Spotify</button>
                    </div>

                </div>
            </div>

            <div className="all-podcasts-section">
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 1 - Karthik Padmanabhan</h3>
                </div>
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 2 - Arjun Singh</h3>
                </div>
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 3 - Neha Gupta</h3>
                </div>
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 4 - Ravi Verma</h3>
                </div>
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 5 - Siddharth Choudhary</h3>
                </div>
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 6 - Rohan Das</h3>
                </div>
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 7 - Maya Reddy</h3>
                </div>
                <div className="podcast-card">
                    <img src={userOutline} alt="" className="podcast-card-img" />
                    <h3>Episode 8 - Arjun Singh</h3>
                </div>
            </div>
            <Footer />
        </>
    )
}