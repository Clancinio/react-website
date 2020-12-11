import React from "react";
// Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

function Contact() {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{background: "#fff"}}
    >
      <h1>Contact Us</h1>
    </StyledContact>
  );
}

const StyledContact = styled(motion.div)``;

export default Contact;
