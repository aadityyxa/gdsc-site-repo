import gdscBWLogo from '../../assets/hero-images/gdsc-logo-bw.svg'
import './footer.css'


export default function Footer() {

    return(
        <div className='footer'>
            <div className="logo">
                <img src={gdscBWLogo} />
            </div>

            <div className="footer-sections">
                <div className="footer-section">
                    <span>EMAIL</span>
                    <div>gdsc@gmail.com</div>
                </div>

                <div className="footer-section">
                    <span>SOCIAL</span>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}