import logoImg from "../../icon/LOGO icon.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <a href="App.jsx">
              <img src={logoImg} alt="" />
              <p>
                Lasles<span>VPN</span>
              </p>
            </a>
          </div>
          <div className="header__menu">
            <nav className="header__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a className="menu__link" href="#">
                    About
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#">
                    Features
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#">
                    Testimonials
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__btn">
            <a href="App.jsx">
              <button className="header__btn-in">Sign In</button>
            </a>
            <a href="App.jsx">
              <button className="header__btn-up">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
