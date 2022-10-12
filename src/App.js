import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingTable from "./components/PricingTable/PricingTable";
import BestBatter from "./components/BestBatter/BestBatter";
import News from "./components/News/News";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/pricing",
      element: (
        <div>
          <Navbar></Navbar>
          <h1 className="my-3 text-3xl font-bold text-blue-500 ">Pricing</h1>
          <PricingTable></PricingTable>
        </div>
      ),
    },
    {
      path: "/batsman",
      element: (
        <div>
          <Navbar></Navbar>
          <h1 className="my-3 text-3xl font-bold text-blue-500 ">Batsman</h1>
          <BestBatter></BestBatter>
        </div>
      ),
    },
    {
      path: "/information",
      element: (
        <div>
          <Navbar></Navbar>
          <h1 className="my-3 text-3xl font-bold text-blue-500 ">News</h1>
          <News></News>
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <Navbar></Navbar>
          <h1 className="my-3 text-3xl font-bold text-blue-500 ">All in one</h1>
          <News></News>
          <BestBatter></BestBatter>
          <PricingTable></PricingTable>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
