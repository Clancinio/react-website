import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import QuestionsSection from "../components/QuestionsSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <QuestionsSection />
    </motion.div>
  );
};

export default AboutUs;
