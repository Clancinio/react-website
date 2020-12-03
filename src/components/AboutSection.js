// Styled-Components
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  Hide,
} from "../styles/ComponentStyles";

function AboutSection() {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> become a reality.
            </h2>
          </Hide>
        </div>
        <p>Call us if you want to get after it.</p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src="https://picsum.photos/300/400" alt="logo" />
      </StyledImage>
    </StyledAbout>
  );
}

// Styled Components

export default AboutSection;
