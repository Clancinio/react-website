// React Router
import { Link } from "react-router-dom";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

function OurWork() {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{background: "#fff"}}
    >
      <Movie>
        <h2>The Great Hunger</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src="https://picsum.photos/400/300" alt="movie screenshot" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Great Times</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src="https://picsum.photos/400/300" alt="movie screenshot" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Great Vaccine</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src="https://picsum.photos/400/300" alt="movie screenshot" />
        </Link>
      </Movie>
    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
    color: black;
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
