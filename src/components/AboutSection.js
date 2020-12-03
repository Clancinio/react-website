// Styled-Components
import styled from "styled-components";

function AboutSection() {
  return (
    <StyledAbout>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            you <span>dreams</span> become a reality.{" "}
          </div>
        </div>
        <p>Call us if you want to get after it.</p>
        <button>Contact Us</button>
      </div>
      <img src="https://picsum.photos/300/400" alt="logo"/>
    </StyledAbout>
  );
}

// Styled Components 
const StyledAbout = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: centre;
  justify-content: space-between;
  padding: 5rem 10rem;
`

export default AboutSection;
