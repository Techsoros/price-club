import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingTable from "./components/PricingTable/PricingTable";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PricingTable></PricingTable>
    </div>
  );
}

export default App;
