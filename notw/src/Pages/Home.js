import React from "react";
import CarouselSlide from "../Components/Carousel/Carousel";
import { useState } from "react";
import { Button } from "flowbite-react";
import { SlMap, SlShareAlt } from "react-icons/sl";
import { Link } from "react-router-dom";

const Home = (countries) => {
  const [rdmNumber, setRdmNumber] = useState(null);
  const [chosenCountry, setChosenCountry] = useState(null);

  function handleRandomCountry() {
    setRdmNumber(Math.floor(Math.random() * (250 - 0) + 0));
    if (countries && countries.Countries && countries.Countries[rdmNumber]) {
      setChosenCountry(countries.Countries[rdmNumber]);
    }
  }

  return (
    <div className="w-3/5 h-3/5 flex flex-col my-4 items-center">
      <h2 className="text-gray-600 mb-4">Home Page</h2>
      <CarouselSlide />
      <Button className="my-4" color="dark" onClick={handleRandomCountry}>
        <SlMap className="mx-2" />
        Random Country
      </Button>
      {chosenCountry && (
        <div className="flex flex-col items-center justify-center text-white bg-red-500 rounded p-1 shadow-xl">
          <p className="uppercase ">Your Country:</p>
          <p className="flex items-center">
            <span className="mx-1">{chosenCountry.flag}</span>
            {chosenCountry.name.common}
            <Link
              to={`/country/${chosenCountry.name.common}`}
              title={`Click to visit: ${chosenCountry.name.common}`}
            >
              <SlShareAlt className="mx-2 text-black animate-bounce w-4 h-4" />
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
