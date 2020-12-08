// Components
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
// Styles
import GlobalStyles from "./styles/GlobalStyles";
// React Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
