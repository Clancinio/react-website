// Images 
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";

function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>High <span>quality</span> training.</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="a clock"/>
              <h3>Efficient</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphram"/>
              <h3>Diaphragm</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork"/>
              <h3>Teamwork</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="a clock"/>
              <h3>Affordable</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="https://picsum.photos/300/400" alt="a picture"/>
      </div>
    </div>
  )
}

export default ServicesSection
