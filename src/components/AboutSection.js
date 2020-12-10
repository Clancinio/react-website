// Styled-Components
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  Hide,
} from "../styles/ComponentStyles";
// Framer Motion
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> become a reality.
            </motion.h2>
          </Hide>
        </motion.div>
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
