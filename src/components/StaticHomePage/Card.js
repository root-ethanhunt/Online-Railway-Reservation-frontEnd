import "./Card.css";
import img1 from "../../assets/t5.jpg";
import img2 from "../../assets/t6.jpg";
import img3 from "../../assets/t7.jpg";

const Card = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1 align="center" style={{ color: "#2B3080" }}>
        Some Scenic Train Routes !
      </h1>
      <br />
      <div className="box">
        <div className="card">
          <div className="imgBx">
            <img src={img1} alt="images" />
          </div>
          <div className="details">
            <h2>
              Himalayan Queen
              <br />
              <span>Kalka to Shimla</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img2} alt="images" />
          </div>
          <div className="details">
            <h2>
              Palace on Wheels
              <br />
              <span>Delhi round-trip through Rajasthan</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img3} alt="images" />
          </div>
          <div className="details">
            <h2>
              Dudhsagar Falls
              <br />
              <span>Trains To Goa</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
