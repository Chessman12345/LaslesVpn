import TitleImg from "../../img/section tree.svg";
import ListImg from "../../icon/GalochkaTwo icon.svg";
import "./cardsOne.css";

const CardsOne = () => {
  return (
    <div className="plan__cardsone-inner">
      <div className="plan__cardsone-image">
        <img src={TitleImg} alt="" />
      </div>
      <div className="plan__cardsone-text">
        <div className="plan__cardsone-text-title">
          <h4>Free Plan</h4>
        </div>
        <div className="plan__cardsone-content-list-box">
          <img src={ListImg} alt="" />
          <li>Internet without borders.</li>
        </div>
        <div className="plan__cardsone-content-list-box">
          <img src={ListImg} alt="" />
          <li>Encrypted Connection</li>
        </div>
        <div className="plan__cardsone-content-list-box">
          <img src={ListImg} alt="" />
          <li>No Traffic Logs</li>
        </div>
        <div className="plan__cardsone-content-list-box">
          <img src={ListImg} alt="" />
          <li>Works on All Devices</li>
        </div>
      </div>
      <div className="plan__cardsone-btn">
        <h2>Free</h2>
        <button>Select</button>
      </div>
    </div>
  );
};

export default CardsOne;
