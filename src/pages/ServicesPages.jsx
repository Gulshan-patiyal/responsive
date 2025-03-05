// src/pages/ServicesPage.js
import React from "react";
import Navbar from "../Navbar";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold xl:text-6xl 2xl:text-3xl">Our Services</h1>
        <p className="mt-4 text-xl xl:text-5xl 2xl:text-2xl  md:text-2xl">We offer top-notch services for all your needs.</p>
      </main>
    </div>
  );
};

export default ServicesPage;
