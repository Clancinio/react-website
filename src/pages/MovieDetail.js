import { useState, useEffect } from "react";
import { MovieState } from "../movieState";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  // Set movies state
  const [movies, setMovies] = useState(MovieState);
  // Extract particular movie
  const [movie, setMovie] = useState(null);

  // Use the useEffect hook to load specific movie data on movie detail
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src="https://picsum.photos/400/300" alt="movie image" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src="https://picsum.photos/400/300" alt="movie screenshot" />
          </ImageDisplay>
        </StyledDetails>
      )}
    </>
  );
}

const StyledDetails = styled(motion.div)``;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    text-align: center;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAward = styled.div`
  padding: 3rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #33b9cb;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;
const Awards = styled.div`
  display: flex;
  min-height: 70vh;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const ImageDisplay = styled.div`
  height: 90vh;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p className="description">{description}</p>
    </StyledAward>
  );
};
export default MovieDetail;
