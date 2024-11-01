import logoImg from "../../icon/LOGO icon.svg";
import FacebookIcon from "../../icon/footer icon facebook.svg";
import TwitterIcon from "../../icon/twitter icon footer.svg";
import instgramIcon from "../../icon/instagram icon footer.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__contact">
            <div className="footer__contact-logo">
              <a href="App.jsx">
                <img src={logoImg} alt="" />
                <p>
                  Lasles<span>VPN</span>
                </p>
              </a>
            </div>
            <div className="footer__contact-text-inner">
              <div className="footer__contact-text">
                <p>
                  <span>LaslesVPN</span> is a private virtual network that has
                  unique features and has high security.
                </p>
              </div>
              <div className="footer__contact-img">
                <div className="footer__contact-img-circle">
                  <img src={FacebookIcon} alt="" />
                </div>
                <div className="footer__contact-img-circle">
                  <img src={TwitterIcon} alt="" />
                </div>
                <div className="footer__contact-img-circle">
                  <img src={instgramIcon} alt="" />
                </div>
              </div>
              <div className="footer__contact-subtitle">
                ©2020Lasles<span>VPN</span>
              </div>
            </div>
          </div>
          <div className="footer__inf">
            <div className="footer__inf-product footer__link">
              <div className="footer__link-title">
                <h4>Product</h4>
              </div>
              <div className="footer__link-list">
                <ul>
                  <li>
                    <a href="#">Download</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Locations</a>
                  </li>
                  <li>
                    <a href="#">Server</a>
                  </li>
                  <li>
                    <a href="#">Countries</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__inf-engage footer__link">
              <div className="footer__link-title">
                <h4>Engage</h4>
              </div>
              <div className="footer__link-list">
                <ul>
                  <li>
                    <a href="#">LaslesVPN ?</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__inf-money footer__link">
              <div className="footer__link-title">
                <h4>Earn Money</h4>
              </div>
              <div className="footer__link-list">
                <ul>
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Become Partner</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
