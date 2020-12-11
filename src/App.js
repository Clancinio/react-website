// Components
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Styles
import GlobalStyles from "./styles/GlobalStyles";
// React Router
import { Switch, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion"

function App() {
  // Key for animate presence 
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
