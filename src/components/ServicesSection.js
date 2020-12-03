// Images
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
// Styled-Components
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  Hide,
} from "../styles/ComponentStyles";

function ServicesSection() {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span>quality</span> training.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="a clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphram" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="a clock" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      {/* <StyledImage>
        <img src="https://picsum.photos/300/400" alt="a picture" />
      </StyledImage> */}
    </StyledServices>
  );
}

const StyledServices = styled(StyledAbout)`
padding-right: 0;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    padding: 2rem 0 4rem 0;
    font-size: 1rem;
  }
`;

const StyledCards = styled.div`
  padding: 0 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  p {
      padding-left: 0.5rem;
    }
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
    }
  }
`;

export default ServicesSection;
