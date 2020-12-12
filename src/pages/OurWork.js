// React Router
import { Link } from "react-router-dom";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, lineAnim } from "../animations";

function OurWork() {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {/* <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4> */}
      <Movie>
        <motion.h2 variants={fade}>The Great Hunger</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <img src="https://picsum.photos/1200/1000" alt="movie screenshot" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Great Times</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src="https://picsum.photos/1200/1000" alt="movie screenshot" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Great Vaccine</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src="https://picsum.photos/1200/1000" alt="movie screenshot" />
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
    background-color: #33b9cb;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #13464d;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #75c9d5;
`;

const Frame3 = styled(Frame1)`
  background: #268c99;
`;

const Frame4 = styled(Frame1)`
  background: #2a484d;
`;

export default OurWork;
