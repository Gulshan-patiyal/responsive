import React from "react";
import Navbar from "../Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-center xl:text-4xl 2xl:text-3xl">
          Welcome to our website
        </h1>
        <p className="mt-4 lg:text-4xl sm:text-2xl text-center xl:text-5xl 2xl:text-3xl md:text-2xl xl:text-2xl">
          Your ultimate status solution.
        </p>

        {/* Cards Section */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 2xl:gap-60 2xl:mt-30 max-w-screen-xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden font-bold">
            <img
              src="pics4.jpg"
              alt="Card Image"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl md:text-3xl"> Title 1</h3>
              <p className="mt-4 text-gray-600 md:text-2xl md:text-green-900 md:font-bold sm:text-2xl sm:font-bold">
                This is a description of the first service or feature you offer.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="pics2.jpg"
              alt="Card Image"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold md:text-3xl"> Title 2</h3>
              <p className="mt-4 text-gray-600 md:text-2xl md:text-green-900 md:font-bold sm:text-2xl sm:font-bold">
                This is a description of the second service or feature you offer.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="pics.jpg"
              alt="Card Image"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold md:text-3xl"> Title 3</h3>
              <p className="mt-4 text-gray-600 md:text-2xl md:text-green-900 md:font-bold sm:text-2xl sm:font-bold">
                This is a description of the third service or feature you offer.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
