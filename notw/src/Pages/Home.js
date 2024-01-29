import React from "react";
import CarouselSlide from "../Components/Carousel/Carousel";
import { useState } from "react";
import { Button } from "flowbite-react";
import { SlMap, SlShareAlt } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import { FiSearch } from "react-icons/fi";

const Home = (countries) => {
  const [rdmNumber, setRdmNumber] = useState(null);
  const [chosenCountry, setChosenCountry] = useState(null);
  const [query, setQuery] = useState(null);

  function handleRandomCountry() {
    setRdmNumber(Math.floor(Math.random() * (250 - 0) + 0));
    if (countries && countries.Countries && countries.Countries[rdmNumber]) {
      setChosenCountry(countries.Countries[rdmNumber]);
    }
  }
  useEffect(() => {
    handleRandomCountry();
  }, []);

  return (
    <div className="w-full flex flex-col my-4 items-center">
      <div className="flex flex-col justify-center fixed right-4 w-36 items-center border-2 border-slate-500 rounded-lg">
        <div className="flex">
          <Link to={`/country/${query}`} className="flex">
            <FiSearch className="mx-2" />
          </Link>

          <input
            className="w-24 text-sm focus:outline-none"
            placeholder="Enter Country"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-start mb-6">
        <h2 className="bg-gradient-to-r from-red-500 to-slate-400 bg-clip-text text-transparent text-8xl mt-4 antialiased">
          EXPLORE
        </h2>
        <p className="ml-2 antialiased text-slate-500">
          DETAILS OF <span className="text-red-500 ">ANY NATION</span> YOU WANT
        </p>
      </div>
      <div className="flex flex-col flex-start">
        <p className="ml-2 mb-1 text-slate-500">Most Popular:</p>
        <CarouselSlide />
      </div>
      <Button className="my-6" color="dark" onClick={handleRandomCountry}>
        <SlMap className="mx-2" />
        Random Country
      </Button>
      {chosenCountry && (
        <div className="flex flex-col items-center justify-center text-white bg-slate-700 rounded p-2 shadow-xl">
          <p className="uppercase">Your Country:</p>
          <p className="flex items-center">
            <span className="mx-1">{chosenCountry.flag}</span>
            {chosenCountry.name.common}
            <Link
              to={`/country/${chosenCountry.name.common}`}
              title={`Click to visit: ${chosenCountry.name.common}`}
            >
              <SlShareAlt className="mx-2 text-blue-300 animate-bounce hover:animate-pulse w-4 h-4" />
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
