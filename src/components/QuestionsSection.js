import React from "react";
// Styling
import styled from "styled-components";
import { StyledAbout } from "../styles/ComponentStyles";

function QuestionsSection() {
  return (
    <StyledQuestions>
      <h2>
        Some frequently asked <span>questions</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            eaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            accusamus officia fuga asperiores, voluptate repellat.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi?
        </h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            eaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            accusamus officia fuga asperiores, voluptate repellat.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            eaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            accusamus officia fuga asperiores, voluptate repellat.
          </p>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, consequuntur. Sapiente.
          </h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, eaque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              accusamus officia fuga asperiores, voluptate repellat.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
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
