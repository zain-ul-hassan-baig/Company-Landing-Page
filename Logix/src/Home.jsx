import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center  bg-gray-100">
      {/* Left Side - Text and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-start p-6 md:p-8 space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Lorem Section
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur
           totam blanditiis quibusdam deleniti ipsam illo cum aut nobis vel 
          corporis vero optio iusto, ratione atque vitae expedita beatae reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur
           totam blanditiis quibusdam deleniti ipsam illo cum aut nobis vel 
          corporis vero optio iusto, ratione atque vitae expedita beatae reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur
           totam blanditiis quibusdam deleniti ipsam illo cum aut nobis vel 
          corporis vero optio iusto, ratione atque vitae expedita beatae reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur
           totam blanditiis quibusdam deleniti ipsam illo cum aut nobis vel 
          corporis vero optio iusto, ratione atque vitae expedita beatae reiciendis.
          
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-8">
        <img
          src="./home.jpg" // Replace with your image URL
          alt="Home Image"
          className="w-[75%] h-[75%] object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
