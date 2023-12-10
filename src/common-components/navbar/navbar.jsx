import logo from '../../assets/hero-images/react.svg';
import './navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {


    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            
            <ul className="navbar-links">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/events'>Events</NavLink>
            </li>
            <li>
                <NavLink to='/podcast'>Podcast</NavLink>
            </li>
            <li>
                <NavLink to='/projects'>Projects</NavLink>
            </li>
            <li>
                <NavLink to='/members'>Members</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact Us</NavLink>
            </li>
            <li>
                <NavLink to='/join'>Join Us</NavLink>
            </li>
            </ul>
        </div>
    )
}