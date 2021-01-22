//Global Style
import GlobalStyle from "./components/GlobalStyle";

//import pages
import AboutSection from "./components/AboutSection";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
