import {Icon} from '@mdi/react'; 
import {mdiInstagram, mdiLinkedin, mdiTwitter, } from '@mdi/js'; 
import discordLogo from '../../assets/discord.svg'
import './sidebar.css'

export default function Sidebar() {
    return(
        <div className="sidebar">
            <ul className="sidebar-links">
                <li><Icon path={mdiInstagram} size={1} color='' stroke='white'></Icon></li>
                <li><Icon path={mdiTwitter} size={1}></Icon></li>
                <li><Icon path={mdiLinkedin} size={1}></Icon></li>
                <li><img src={discordLogo} className='discord-logo'/></li>
            </ul>
        </div>
    )
}