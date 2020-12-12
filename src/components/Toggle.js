import { useState } from "react";

function Toggle( children ) {
  const [toggle, setToggle] = useState(true);
  // if toggle is true, render out the children, if not render out nothing
  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
}

export default Toggle;
