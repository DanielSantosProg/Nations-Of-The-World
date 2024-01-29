import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState(null);

  const searchBarRef = useRef(null);

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div
      className="flex flex-col justify-center w-48 bg-white items-center border-2 border-slate-500 rounded-lg"
      ref={searchBarRef}
    >
      <div className="flex">
        <FiSearch className="mx-2" />
        <input
          className="w-36 text-sm focus:outline-none"
          placeholder="Enter Country"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      {countries &&
        Array.isArray(countries) &&
        countries
          .filter((country) => {
            if (query === "") {
              return country;
            } else if (
              country.name.common.toLowerCase().includes(query.toLowerCase())
            ) {
              return country;
            }
          })
          .map((country) => (
            <Link to={`/country/${country.name.common}`} className="flex">
              <div
                className="flex text-left border-double w-44 border-b-2 border-slate-500 z-50 px-2.5 bg-white hover:bg-slate-500 hover:text-white"
                key={country.name.common}
              >
                <p className="mr-2">{country.flag}</p>
                <p>{country.name.common}</p>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default SearchBar;
