import styled from "styled-components";

// Reusable Styled Components 
export const StyledAbout = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: centre;
  justify-content: space-between;
  padding: 5rem 10rem;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`