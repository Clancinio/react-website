// Styled-Components
import styled from "styled-components";

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
const StyledAbout = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: centre;
  justify-content: space-between;
  padding: 5rem 10rem;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`
export default AboutSection;
