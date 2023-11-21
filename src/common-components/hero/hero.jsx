import {Icon} from '@mdi/react'; 
import {mdiInstagram, mdiLinkedin, mdiTwitter, } from '@mdi/js'; 
import discordIcon from '../../assets/discord.svg'
import buttonTopLogo from '../../assets/top-vector.png'
import buttonBottomLogo from '../../assets/bottom-vector.png'
import './hero.css'
import PropTypes from 'prop-types'; 

export default function Hero({buttonStatus}) {

    const heroClassName = ['hero', buttonStatus ? 'hero-flex' : 'hero-center'].join(' '); 

    return(
        <div className='banner'>
            <div className="sidebar">
                <ul className="sidebar-links">
                    <li><Icon path={mdiInstagram} size={1.} color='' stroke='white'></Icon></li>
                    <li><Icon path={mdiTwitter} size={1.}></Icon></li>
                    <li><Icon path={mdiLinkedin} size={1}></Icon></li>
                    <li><img src={discordIcon} className='discord-logo'/></li>
                </ul>
            </div>

            <div className={heroClassName}>
                <div className="text">
                    <div className='hero-text'>
                        <h1>GDSC</h1>
                        <h1>MIT-WPU</h1>
                    </div>
                </div>
                
                <div className="button-section">
                    <img src={buttonTopLogo} className='button-images'/>
                    <button className="join-us-button">Join Us</button>
                    <img src={buttonBottomLogo} className='button-images' />
                </div>
            </div>
        </div>

        
    )
}

Hero.propTypes = {
    buttonStatus: PropTypes.bool
}
