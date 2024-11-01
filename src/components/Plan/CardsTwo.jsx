import TitleImg from "../../img/section tree.svg";
import ListImg from "../../icon/GalochkaTwo icon.svg";
import "./cardsTwo.css";

const CardsTwo = () => {
  return (
    <div className="plan__cardstwo-inner">
      <div className="plan__cardsone-image">
        <img src={TitleImg} alt="" />
      </div>
      <div className="plan__cardstwo-text">
        <div className="plan__cardstwo-text-title">
          <h4>Standard Plan</h4>
        </div>
        <div className="plan__cardstwo-content-list-box">
          <img src={ListImg} alt="" />
          <li>Internet without borders.</li>
        </div>
        <div className="plan__cardstwo-content-list-box">
          <img src={ListImg} alt="" />
          <li>Encrypted Connection</li>
        </div>
        <div className="plan__cardstwo-content-list-box">
          <img src={ListImg} alt="" />
          <li>No Traffic Logs</li>
        </div>
        <div className="plan__cardstwo-content-list-box">
          <img src={ListImg} alt="" />
          <li>Works on All Devices</li>
        </div>
        <div className="plan__cardstwo-content-list-box">
          <img src={ListImg} alt="" />
          <li>Connect Anyware</li>
        </div>
      </div>
      <div className="plan__cardstwo-btn">
        <div className="plan__cardstwo-btn-text">
          <h2>$9</h2>
          <p> / mo</p>
        </div>
        <button>Select</button>
      </div>
    </div>
  );
};

export default CardsTwo;
