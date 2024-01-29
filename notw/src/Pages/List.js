import React from "react";
import TableList from "../Components/Table/Table";
import { useState, useEffect } from "react";
import RegionDropdown from "../Components/Dropdown/Dropdown";

const List = () => {
  const [region, setRegion] = useState(null);
  const [countries, setCountries] = useState(null);

  const fetchRegion = (region) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };

  useEffect(() => {
    fetchRegion(region);
  }, [region]);

  return (
    <div className="w-full flex flex-col my-4 items-center">
      <h2 className="mb-4">
        <span className="text-red-500 drop-shadow-md contrast-125">
          COUNTRY{" "}
        </span>
        LIST
      </h2>
      <div>
        <div className="mb-2 ml-6 text-slate-600">
          <RegionDropdown region={region} setRegion={setRegion} />
        </div>
        {region && countries ? <TableList countries={countries} /> : ""}
      </div>
    </div>
  );
};

export default List;
