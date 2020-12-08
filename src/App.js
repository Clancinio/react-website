// Components
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
// Styles
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
