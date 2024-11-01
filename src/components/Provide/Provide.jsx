import ProvideImg from "../../img/section two.svg";
import GalochkaImg from "../../icon/galochka icon.svg";
import "./provide.css";

const Provide = () => {
  return (
    <section className="provide">
      <div className="container">
        <div className="provide__inner">
          <div className="provide__image-content">
            <img src={ProvideImg} alt="" />
          </div>
          <div className="provide__text-content">
            <div className="provide__text-content-title">
              <h2>We Provide Many Features You Can Use</h2>
              <p>
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
            </div>
            <div className="provide__text-content-list">
              <div className="provide__text-content-list-box">
                <img className="" src={GalochkaImg} alt="" />
                <li>Powerfull online protection.</li>
              </div>
              <div className="provide__text-content-list-box">
                <img className="" src={GalochkaImg} alt="" />
                <li>Internet without borders.</li>
              </div>
              <div className="provide__text-content-list-box">
                <img className="" src={GalochkaImg} alt="" />
                <li>Supercharged VPN</li>
              </div>
              <div className="provide__text-content-list-box">
                <img className="" src={GalochkaImg} alt="" />
                <li>No specific time limits.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
