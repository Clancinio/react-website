import styled from "styled-components";

// Reusable Styled Components
export const StyledAbout = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
`;

export const StyledDescription = styled.div`
  flex: 60% 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 35% 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
