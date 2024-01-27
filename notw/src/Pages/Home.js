import React from "react";
import CarouselSlide from "../Components/Carousel/Carousel";

const Home = (countries) => {
  const chosenCountry =
    countries && countries.Countries && countries.Countries[2];
  console.log(chosenCountry);

  return (
    <div className="w-3/5 h-3/5 flex flex-col my-4 items-center">
      <h2 className="text-gray-600 mb-4">Home Page</h2>
      <CarouselSlide />
      {/* {countries && countries.Countries && (
        <p>Country name: {chosenCountry.name.common}</p>
      )} */}
    </div>
  );
};

export default Home;
