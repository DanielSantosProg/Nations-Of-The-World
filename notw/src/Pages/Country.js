import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SlMap } from "react-icons/sl";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  const fetchCountry = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  };

  useEffect(() => {
    fetchCountry(name);
  }, [name]);

  return (
    <div className="w-full overflow-auto">
      {!country && <p className="text-center">Loading country...</p>}
      {country && (
        <div className="flex flex-col items-center">
          <p className="my-2 uppercase">{country.name.common}</p>
          <img
            className="w-1/5"
            src={country.flags.png}
            title={`${country.name.common} flag`}
            alt={`${country.name.common} flag`}
          />
          <h2 className="font-semibold my-2">Flag description:</h2>
          <p className="mb-2">{country.flags.alt}</p>
          <div className="flex justify-between w-4/5">
            <div className="flex flex-col my-4 items-center w-6/12">
              <h2 className="font-semibold mb-2">Official name:</h2>
              <p className="mb-2">{country.name.official}</p>
              <h2 className="font-semibold mb-2">Capital:</h2>
              <p className="mb-2">{country.capital[0]}</p>
              <h2 className="font-semibold mb-2">Region:</h2>
              <p className="mb-2">{country.region}</p>
              <h2 className="font-semibold mb-2">Sub-Region:</h2>
              <p className="mb-2">{country.subregion}</p>
            </div>
            <div className="flex flex-col grow-0 my-4 items-center w-6/12 ml-4">
              <h2 className="font-semibold mb-2">Alternative Spellings:</h2>
              <ul className="text-center">
                {country.altSpellings.map((alt) => (
                  <li className="mb-1">{alt}</li>
                ))}
              </ul>
              <p className="mb-2">{country.name.official}</p>
              <h2 className="font-semibold mb-2">Languages:</h2>
              <ul className="text-center mb-2">
                {Object.entries(country.languages).map(([key, value]) => (
                  <li key={key} className="mb-1">
                    {value}
                  </li>
                ))}
              </ul>
              <h2 className="font-semibold mb-2">Map link:</h2>
              <Link to={`${country.maps.googleMaps}`}>
                <Button color="success" className="h-6">
                  <SlMap className="mx-2" />
                  Google Maps
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
