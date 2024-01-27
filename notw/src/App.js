import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import About from "./Pages/About";
import { useState, useEffect } from "react";
import Country from "./Pages/Country";

function App() {
  const [countries, setCountries] = useState(null);

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App flex">
      <SideBar className="max-w-4" />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home Countries={countries} />} />
            <Route path="/search" element={<Search Countries={countries} />} />
            <Route path="/about" element={<About />} />
            <Route path="/country/:name" element={<Country />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
