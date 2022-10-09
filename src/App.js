import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="font-bold text-6xl bg-slate-300 p-7 rounded-lg m-9 te text-gray-800 ">
        Hello Zihad
      </h1>
      <p className="text-gray-700 text-justify px-16 hover:text-red-600 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        neque provident veritatis sapiente quia ut mollitia quo aliquid in quae.
        Accusantium molestiae ex alias vel perferendis deleniti consectetur
        officia quibusdam distinctio, minima nesciunt optio consequuntur ea
        dolor saepe eaque assumenda voluptatibus eligendi expedita sit,
        voluptatem laboriosam libero! Dicta dolores ratione natus error earum
        fuga aliquid, fugit minus sit ducimus aperiam nostrum explicabo
        accusamus inventore labore praesentium tempora numquam quos sint,
        eveniet, facere adipisci modi libero! Molestiae explicabo, non
        repudiandae iure ipsum pariatur quasi aliquid culpa! Facere aut laborum
        fugiat inventore dolor rerum modi molestias vel, beatae explicabo quasi
        libero vitae.
      </p>
    </div>
  );
}

export default App;
