import {Icon} from '@mdi/react'; 
import {mdiInstagram, mdiLinkedin, mdiTwitter, } from '@mdi/js';
import discordIcon from '../../assets/hero-images/discord.svg'

import buttonTopLogo from '../../assets/hero-images/top-vector.png'
import buttonBottomLogo from '../../assets/hero-images/bottom-vector.png'
import heroTextTopImage from '../../assets/hero-images/event-top.png'
import heroTextBottomImage from '../../assets/hero-images/event-bottom.png'

import './hero.css'
import PropTypes from 'prop-types'; 

export default function Hero({buttonStatus, primaryText, secondaryText, spanText, buttonText}) {

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
                    {!buttonStatus && <img src={heroTextTopImage} className='hero-images'/>}
                        <h1>{primaryText}</h1>
                        <h1>{secondaryText}</h1>
                        <span>{spanText}</span>
                    {!buttonStatus && <img src={heroTextBottomImage} className='hero-images' />}
                    </div>
                </div>
                
                {buttonStatus && <div className="button-section">
                    <img src={buttonTopLogo} className='button-images'/>
                    <button className="join-us-button">{buttonText}</button>
                    <img src={buttonBottomLogo} className='button-images' />
                </div>}
            </div>
        </div>

        
    )
}

Hero.propTypes = {
    buttonStatus: PropTypes.bool,
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    spanText:PropTypes.string,
    buttonText:PropTypes.string
}
