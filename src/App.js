import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingTable from "./components/PricingTable/PricingTable";
import BestBatter from "./components/BestBatter/BestBatter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BestBatter></BestBatter>
      <PricingTable></PricingTable>
    </div>
  );
}

export default App;
