import AmazonImg from "../../img/section four amazon.svg";
import DiscordImg from "../../img/section four discord.svg";
import LocationImg from "../../img/section four location.svg";
import NetflixImg from "../../img/section four netflix.svg";
import RedditImg from "../../img/section four reddit.svg";
import SpotifyImg from "../../img/section four spotify.svg";
import "./network.css";

const Network = () => {
  return (
    <section className="network">
      <div className="container">
        <div className="network__inner">
          <div className="network__text">
            <h2>Huge Global Network of Fast VPN</h2>
            <p>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </p>
          </div>
          <div className="network__image">
            <img src={LocationImg} alt="" />
          </div>
          <div className="network__advertising">
            <img src={NetflixImg} alt="" />
            <img src={RedditImg} alt="" />
            <img src={AmazonImg} alt="" />
            <img src={DiscordImg} alt="" />
            <img src={SpotifyImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
