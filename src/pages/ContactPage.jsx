
import React from "react";
import Navbar from "../Navbar";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold xl:text-6xl 2xl:text-3xl">Contact Us</h1>
        <p className="mt-4 text-xl xl:text-4xl 2xl:text-2xl md:text-2xl">Get in touch with us for more information.</p>
      </main>
    </div>
  );
};

export default ContactPage;
