"use client";
import { Dropdown } from "flowbite-react";

function RegionDropdown({ region, setRegion }) {
  return (
    <Dropdown
      label={region ? `${region}` : "Select Region"}
      inline
      dismissOnClick={true}
    >
      <Dropdown.Item onClick={() => setRegion("Africa")}>Africa</Dropdown.Item>
      <Dropdown.Item onClick={() => setRegion("Americas")}>
        Americas
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setRegion("Asia")}>Asia</Dropdown.Item>
      <Dropdown.Item onClick={() => setRegion("Europe")}>Europe</Dropdown.Item>
      <Dropdown.Item onClick={() => setRegion("Oceania")}>
        Oceania
      </Dropdown.Item>
    </Dropdown>
  );
}

export default RegionDropdown;
