"use client";

import { Table } from "flowbite-react";
import { SlActionRedo } from "react-icons/sl";
import { Link } from "react-router-dom";

function TableList({ countries }) {
  console.log(countries);
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Country Name</Table.HeadCell>
          <Table.HeadCell>Flag</Table.HeadCell>
          <Table.HeadCell>Sub Region</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {countries &&
            Array.isArray(countries) &&
            countries
              .slice() // Create a copy of the array to avoid mutating the original
              .sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((country) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={country.name.common}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {country.name.common}
                  </Table.Cell>
                  <Table.Cell>{country.flag}</Table.Cell>
                  <Table.Cell>{country.subregion}</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/country/${country.name.common}`}
                      title={`Click to visit: ${country.name.common}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <SlActionRedo />
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableList;
