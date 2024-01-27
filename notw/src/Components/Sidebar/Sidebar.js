"use client";

import React from "react";
import { Sidebar } from "flowbite-react";
import { FiSearch, FiUsers, FiFlag } from "react-icons/fi";

function SideBar() {
  return (
    <div className="min-h-screen">
      <Sidebar aria-label="Sidebar with logo branding example">
        <a href="/">
          <p className="uppercase my-2 mx-4 drop-shadow-md contrast-125 ">
            <span className="text-red-500 font-bold">Nations</span> of the world
          </p>
        </a>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item className="text-sm hover:bg-gray-300" href="/search">
              <div className="flex space-x-4">
                <span className="icon mg">
                  <FiSearch />
                </span>
                <p>Search by name</p>
              </div>
            </Sidebar.Item>
            <Sidebar.Item className="text-sm hover:bg-gray-300" href="#">
              <div className="flex space-x-4">
                <span className="icon mg">
                  <FiFlag />
                </span>
                <p>Random Nation</p>
              </div>
            </Sidebar.Item>
            <Sidebar.Item className="text-sm hover:bg-gray-300" href="/about">
              <div className="flex space-x-4">
                <span className="icon mg">
                  <FiUsers />
                </span>
                <p>About Us</p>
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
