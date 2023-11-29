import Navbar from '../../common-components/navbar/navbar'
import Footer from '../../common-components/footer/footer'
import './contact.css'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="customLine">
        <div class="text-container">
            <div class="text-center">CONTACT</div>
            <div class="text-center">US</div>
        </div>
      </div>
      <div className="container">
      <div className="connect">
        <div className="email">
            <h2>Email</h2>
            <h2>GDSC@GMAIL.COM</h2>
        </div>
        <div className="social">
            <h2>Social</h2>
            <h2 href="www.instagram.com">Instagram</h2>
            <h2>Twitter</h2>
            <h2>Facebook</h2>
        </div>
      </div>
    <form>
        <div class="label-group">
            <label>
                Full Name:
                <input type="text" />
            </label>
            <label>
                Phone Number:
                <input type="text" />
            </label>
        </div>
        <label>
            Email Address:
            <input type="email" />
        </label>
        <label>
            Reasons for Connecting:
            <textarea></textarea>
        </label>
      </form>
      </div>
      <Footer />
    </>
  );
}





