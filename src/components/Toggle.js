import { motion } from "framer-motion";
import { useState } from "react";

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(false);
  // if toggle is true, render out the children, if not render out nothing
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
}

export default Toggle;
