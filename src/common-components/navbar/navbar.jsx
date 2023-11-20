import logo from '../../assets/react.svg';
import './navbar.css'

export default function Navbar() {


    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            
            <ul className="navbar-links">
                <li>Home</li>
                <li>Events</li>
                <li>Podcast</li>
                <li>Projects</li>
                <li>Members</li>
                <li>Contact Us</li>
                <li>Join Us</li>
            </ul>
        </div>
    )
}