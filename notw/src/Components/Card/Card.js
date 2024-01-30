"use client";

import { Card } from "flowbite-react";

function AboutCard() {
  return (
    <Card
      className="max-w-lg"
      imgAlt="About NOTW"
      imgSrc="https://images.theconversation.com/files/192737/original/file-20171031-18686-13dcjik.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        About Nations of The World
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Nations of The world is a website that is dedicated to providing a
        comprehensive exploration of every country on Earth. Whether you're
        seeking detailed information, planning a trip, or simply satisfying your
        curiosity, our platform is here for it.
      </p>
    </Card>
  );
}

export default AboutCard;
