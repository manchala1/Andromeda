// import logo from './logo.svg';
// import ReactDOM from "react-dom";
import Navigation from "../src/components/Navigation";
// import Footer from "../src/components/Footer";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Personalloan from "../src/components/personalloan";
import Loanagainstproperty from "../src/components/loanagainstproperty";
import Footermain from "../src/components/footermain";
import Homeloan from "../src/components/homeloan";
import Footer from "../src/components/footer";
import Home from "../src/components/home";
import "./App.css";
import Becomeapartner from "./components/becomeapartner";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/becomeapartner">
          <Becomeapartner />
        </Route>
        <Route path="/personalloan">
          <Personalloan />
        </Route>
        <Route path="/loanagainstproperty">
          <Loanagainstproperty />
        </Route>
        <Route path="/homeloan">
          <Homeloan />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Footermain />
      <Footer />
    </div>
  );
}

export default App;
