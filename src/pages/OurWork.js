// React Router
import { Link } from "react-router-dom";
import styled from "styled-components";

function OurWork() {
  return (
    <StyledWork>
      <Movie>
        <h2>The Great Hunger</h2>
        <div className="line"></div>
        <Link>
          <img src="https://picsum.photos/400/300" alt="movie screenshot" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Great Times</h2>
        <div className="line"></div>
        <Link>
          <img src="https://picsum.photos/400/300" alt="movie screenshot" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Great Vaccine</h2>
        <div className="line"></div>
        <Link>
          <img src="https://picsum.photos/400/300" alt="movie screenshot" />
        </Link>
      </Movie>
    </StyledWork>
  );
}

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
