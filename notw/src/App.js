// App.js

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

// Pages
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import About from "./Pages/About";
import Country from "./Pages/Country";
import List from "./Pages/List";
import SearchBar from "./Components/SearchBar/SearchBar";

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
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar className="w-48 bg-gray-800" />
      {/* Main content */}
      <div className="flex justify-center overflow-hidden w-full">
        <BrowserRouter>
          <div className="flex justify-center w-full overflow-auto bg-gradient-to-b from-white to-gray-200">
            <Routes>
              <Route path="/" element={<Home Countries={countries} />} />
              <Route path="/list" element={<List Countries={countries} />} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
              <Route path="/country/:name" element={<Country />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
