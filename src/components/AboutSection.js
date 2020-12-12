// Styled-Components
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  Hide,
} from "../styles/ComponentStyles";
// Framer Motion
import { motion } from "framer-motion";
import { fade, photoAnim } from "../animations";
import Wave from "./Wave";
// import { titleAnim} from "../animations";

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
        <motion.p variants={fade}>Call us if you want to get after it.</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <img src="https://picsum.photos/300/400" alt="logo" />
      </StyledImage>
      <Wave /> 
    </StyledAbout>
  );
}

// Styled Components

export default AboutSection;