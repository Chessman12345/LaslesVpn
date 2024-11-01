import TitleImg from "../../img/section tree.svg";
import ListImg from "../../icon/GalochkaTwo icon.svg";
import "./cardsTree.css";

const CardsTree = () => {
  return (
    <div className="plan__cardstree-inner">
      <div className="plan__cardsone-image">
        <img src={TitleImg} alt="" />
      </div>
      <div className="plan__cardstree-text">
        <div className="plan__cardstree-text-title">
          <h4>Premium Plan</h4>
        </div>
        <div className="plan__cardstree-content-list-box">
          <img src={ListImg} alt="" />
          <li>Internet without borders.</li>
        </div>
        <div className="plan__cardstree-content-list-box">
          <img src={ListImg} alt="" />
          <li>Encrypted Connection</li>
        </div>
        <div className="plan__cardstree-content-list-box">
          <img src={ListImg} alt="" />
          <li>No Traffic Logs</li>
        </div>
        <div className="plan__cardstree-content-list-box">
          <img src={ListImg} alt="" />
          <li>Works on All Devices</li>
        </div>
        <div className="plan__cardstree-content-list-box">
          <img src={ListImg} alt="" />
          <li>Connect Anyware</li>
        </div>
        <div className="plan__cardstree-content-list-box">
          <img src={ListImg} alt="" />
          <li>Get New Features</li>
        </div>
      </div>
      <div className="plan__cardstree-btn">
        <div className="plan__cardstree-btn-text">
          <h2>$12</h2>
          <p> / mo</p>
        </div>
        <button>Select</button>
      </div>
    </div>
  );
};

export default CardsTree;
