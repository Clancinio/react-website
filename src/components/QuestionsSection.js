import React from "react";
import Toggle from "./Toggle";
// Styling
import styled from "styled-components";
import { StyledAbout } from "../styles/ComponentStyles";
import { motion, AnimateSharedLayout } from "framer-motion";
import { fade } from "../animations";

function QuestionsSection() {
  return (
    <StyledQuestions>
      <h2>
        Some frequently asked <span>questions</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
          <motion.p variants={fade} initial="hidden" animate="show">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, eaque?
            </motion.p>
            <motion.p variants={fade} initial="hidden" animate="show">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              accusamus officia fuga asperiores, voluptate repellat.
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="Another question?">
          <div className="answer">
          <motion.p variants={fade} initial="hidden" animate="show">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, eaque?
            </motion.p>
            <motion.p variants={fade} initial="hidden" animate="show">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              accusamus officia fuga asperiores, voluptate repellat.
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="Another question?">
          <div className="answer">
            <motion.p variants={fade} initial="hidden" animate="show">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, eaque?
            </motion.p>
            <motion.p variants={fade} initial="hidden" animate="show">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              accusamus officia fuga asperiores, voluptate repellat.
            </motion.p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledQuestions>
  );
}

const StyledQuestions = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default QuestionsSection;
