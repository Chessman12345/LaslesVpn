import CardsOne from "./CardsOne";
import CardsTwo from "./CardsTwo";
import CardsTree from "./CardsTree";
import "./plan.css";

const Plan = () => {
  return (
    <section className="plan">
      <div className="container">
        <div className="plan__inner">
          <div className="plan__text">
            <h2>Choose Your Plan</h2>
            <p>
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>

          <div className="plan__cards">
            <CardsOne />
            <CardsTwo />
            <CardsTree />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
