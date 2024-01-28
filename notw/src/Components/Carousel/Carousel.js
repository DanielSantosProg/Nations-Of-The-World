"use client";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

function CarouselSlide() {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <div className="relative text-center ">
          <Link to="country/brazil" className="block relative">
            <img
              src="https://www.tmf-group.com/globalassets/images/news-and-insights/articles/944x540-country-landscape/christ-sugar-loaf-mountain-brazil.jpg"
              alt="Brazil"
              className="w-full h-auto
              "
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-amber-300 backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              Brazil
            </p>
          </Link>
        </div>
        <div className="relative text-center w-fit">
          <Link to="country/usa" className="block relative">
            <img
              src="https://img.freepik.com/fotos-gratis/a-bandeira-dos-eua-ou-estados-unidos-da-america-em-um-mastro-de-bandeira-perto-de-arranha-ceus-sob-um-ceu-nublado_181624-5054.jpg"
              alt="United States of America"
              className="w-full h-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              USA
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/japan" className="block relative">
            <img
              src="https://a.cdn-hotels.com/gdcs/production147/d1285/0745ceba-e251-44dd-900d-758bd7078d8a.jpg?impolicy=fcrop&w=800&h=533&q=medium"
              alt="Japan"
              className="w-full h-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-red-700 backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              Japan
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/netherlands" className="block relative">
            <img
              src="https://media.timeout.com/images/106034581/750/562/image.jpg"
              alt="Netherlands"
              className="w-full h-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-sky-400 outline-cyan-500 backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              Netherlands
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/germany" className="block relative">
            <img
              src="https://www.expatrio.com/sites/default/files/styles/header_image/public/2020-02/pexels-photo-2570063.jpeg?itok=4U_uzaS8"
              alt="Germany"
              className="w-full h-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              Germany
            </p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSlide;
