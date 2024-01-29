import React from "react";
import CarouselSlide from "../Components/Carousel/Carousel";
import { useState } from "react";
import { Button } from "flowbite-react";
import { SlMap, SlShareAlt } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = (countries) => {
  const [rdmNumber, setRdmNumber] = useState(null);
  const [chosenCountry, setChosenCountry] = useState(null);

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
      <h2 className="text-gray-600 mb-4">Home Page</h2>
      <div className="flex flex-col flex-start">
        <p className="ml-2 mb-1">Most Popular:</p>
        <CarouselSlide />
      </div>
      <Button className="my-6" color="dark" onClick={handleRandomCountry}>
        <SlMap className="mx-2" />
        Random Country
      </Button>
      {chosenCountry && (
        <div className="flex flex-col items-center justify-center text-white bg-slate-700 rounded p-2 shadow-xl">
          <p className="uppercase ">Your Country:</p>
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
