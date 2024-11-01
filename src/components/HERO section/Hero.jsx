import HeroImg from "../../img/section one.svg";

import UserImg from "../../icon/User icon.svg";
import LocationImg from "../../icon/Location icon.svg";
import ServerImg from "../../icon/Server icon.svg";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content-top">
            <div className="hero__text">
              <div className="hero__text-title-inner">
                <div className="hero__text-title">
                  <h1>
                    Want anything to be easy with <span>LaslesVPN.</span>
                  </h1>
                  <p>
                    Provide a network for all your needs with ease and fun using
                    LaslesVPN discover interesting features from us.
                  </p>
                </div>
              </div>
              <div className="hero__btn">
                <a href="App.jsx">
                  <button>Get Started</button>
                </a>
              </div>
            </div>
            <div className="hero__image">
              <img src={HeroImg} alt="" />
            </div>
          </div>
          <div className="hero__content-bottom">
            <div className="hero__content-user box">
              <div className="hero__content-user-img">
                <img src={UserImg} alt="" />
              </div>
              <div className="hero__content-user-text content-text">
                <div className="hero__content-user-title content-title">
                  90+
                </div>
                <div className="hero__content-user-subtitle content-subtitle">
                  Users
                </div>
              </div>
            </div>
            <div className="hero__content-location box">
              <div className="hero__content-location-img">
                <img src={LocationImg} alt="" />
              </div>
              <div className="hero__content-location-text content-text">
                <div className="hero__content-location-title content-title">
                  30+
                </div>
                <div className="hero__content-location-subtitle content-subtitle">
                  Location
                </div>
              </div>
            </div>
            <div className="hero__content-servers box">
              <div className="hero__content-servers-img">
                <img src={ServerImg} alt="" />
              </div>
              <div className="hero__content-servers-text content-text">
                <div className="hero__content-servers-title content-title">
                  50+
                </div>
                <div className="hero__content-servers-subtitle content-subtitle">
                  Servers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
