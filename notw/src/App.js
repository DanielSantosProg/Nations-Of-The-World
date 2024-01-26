import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import About from "./Pages/About";

function App() {
  return (
    <div className="App flex">
      <SideBar className="max-w-4" />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
