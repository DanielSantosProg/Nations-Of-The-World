"use client";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

function CarouselSlide() {
  return (
    <div className="h-48 w-96 flex flex-grow">
      <Carousel pauseOnHover>
        <div className="relative text-center">
          <Link to="country/brazil" className="block relative">
            <img
              src="https://gsg-61ea.kxcdn.com/media/contents/Rio%20city%20and%20rocks%20lucas-campoi-pHnzdSAEkRM-unsplash.jpg"
              alt="Brazil"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white underline decoration-double backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              BRAZIL
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/usa" className="block relative">
            <img
              src="https://img.freepik.com/fotos-gratis/a-bandeira-dos-eua-ou-estados-unidos-da-america-em-um-mastro-de-bandeira-perto-de-arranha-ceus-sob-um-ceu-nublado_181624-5054.jpg"
              alt="United States of America"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white underline decoration-double backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              USA
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/japan" className="block relative">
            <img
              src="https://a.cdn-hotels.com/gdcs/production147/d1285/0745ceba-e251-44dd-900d-758bd7078d8a.jpg?impolicy=fcrop&w=800&h=533&q=medium"
              alt="Japan"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-slate-700 underline decoration-double backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              JAPAN
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/netherlands" className="block relative">
            <img
              src="https://media.timeout.com/images/106034581/750/562/image.jpg"
              alt="Netherlands"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-slate-700 underline decoration-double outline-cyan-500 backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              NETHERLANDS
            </p>
          </Link>
        </div>
        <div className="relative text-center">
          <Link to="country/germany" className="block relative">
            <img
              src="https://www.expatrio.com/sites/default/files/styles/header_image/public/2020-02/pexels-photo-2570063.jpeg?itok=4U_uzaS8"
              alt="Germany"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white underline decoration-double backdrop-filter backdrop-saturate-50 hover:backdrop-saturate-200">
              GERMANY
            </p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSlide;
