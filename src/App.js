import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingTable from "./components/PricingTable/PricingTable";
import BestBatter from "./components/BestBatter/BestBatter";
import News from "./components/News/News";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BestBatter></BestBatter>
      <PricingTable></PricingTable>
      <News></News>
    </div>
  );
}

export default App;
