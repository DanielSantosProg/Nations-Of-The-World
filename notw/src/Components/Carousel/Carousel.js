"use client";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

function CarouselSlide() {
  return (
    <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <div className="relative text-center w-fit">
          <Link to="country/brazil">
            <img
              src="https://www.tmf-group.com/globalassets/images/news-and-insights/articles/944x540-country-landscape/christ-sugar-loaf-mountain-brazil.jpg"
              alt="Brazil"
            />
            <p className="absolute text-white bottom-2 left-1 sm:bottom-4 left-1 text-sm lg:bottom-10 text-4xl left-4 2xl:bottom-20 left-4 ">
              Brazil
            </p>
          </Link>
        </div>
        <div className="relative text-center w-fit">
          <Link to="country/usa">
            <img
              src="https://img.freepik.com/fotos-gratis/a-bandeira-dos-eua-ou-estados-unidos-da-america-em-um-mastro-de-bandeira-perto-de-arranha-ceus-sob-um-ceu-nublado_181624-5054.jpg"
              alt="United States of America"
            />
            <p className="absolute text-white bottom-2 left-1 sm:bottom-4 left-1 text-sm lg:bottom-10 text-4xl left-4 2xl:bottom-20 left-4 ">
              USA
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/japan">
            <img
              src="https://a.cdn-hotels.com/gdcs/production147/d1285/0745ceba-e251-44dd-900d-758bd7078d8a.jpg?impolicy=fcrop&w=800&h=533&q=medium"
              alt="Japan"
            />
            <p className="absolute text-white bottom-2 left-1 sm:bottom-4 left-1 text-sm md:bottom-8 lg:bottom-12 text-4xl left-4 2xl:bottom-24 left-4 ">
              Japan
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/netherlands">
            <img
              src="https://media.timeout.com/images/106034581/750/562/image.jpg"
              alt="Netherlands"
            />
            <p className="absolute text-white bottom-2 left-1 sm:bottom-4 left-1 text-sm lg:bottom-10 text-4xl left-4 2xl:bottom-20 left-4 ">
              Netherlands
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/germany">
            <img
              src="https://www.expatrio.com/sites/default/files/styles/header_image/public/2020-02/pexels-photo-2570063.jpeg?itok=4U_uzaS8"
              alt="Germany"
            />
            <p className="absolute text-white bottom-2 left-1 sm:bottom-4 left-1 text-sm lg:bottom-10 text-4xl left-4 2xl:bottom-20 left-4 ">
              Germany
            </p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSlide;
