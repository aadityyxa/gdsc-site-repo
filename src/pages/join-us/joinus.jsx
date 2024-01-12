import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import ApplicationForm from "./form-comp";
import './joinus.css'

export default function JoinUs(){

    const activeRoles = ['Designer']; 

    return(
        <>
        <Navbar />
        <div className="events-heading-section upcoming-events-heading">
            <div>

            </div>

            <div>

            </div>

            <h1>JOIN US</h1>
        </div>

        <div className="join-container">
            <div className="join-connect">
                <div className="join-email">
                    <span>EMAIL</span>
                    <div>gdsc@gmail.com</div>
                </div>
                <div className="join-social">
                    <span>SOCIAL</span>
                    <div>Instagram</div>
                    <div>Twitter</div>
                    <div>Facebook</div>
                </div>
            </div>
        
            <ApplicationForm activeRoles={activeRoles} />


        </div>
        <Footer />
        </>
    )
}