import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  const fetchCountry = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0])); // Access the first item in the array
  };

  useEffect(() => {
    fetchCountry(name);
  }, [name]);

  return (
    <div>
      {!country && <p>Não encontramos o país</p>}
      {country && (
        <div>
          <p className="my-2 uppercase">
            {country.flag} {country.name.common}
          </p>
          <p>Capital: {country.capital[0]}</p>
        </div>
      )}
    </div>
  );
};

export default Country;
