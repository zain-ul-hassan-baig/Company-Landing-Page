import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-200 py-12 px-6">
      <div className="max-w-4xl text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          About Us
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          We are a passionate team of professionals dedicated to delivering
          innovative solutions that solve real-world problems. Our mission is to
          provide exceptional services that exceed client expectations and make
          a lasting impact in the industry.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
          {/* Left Side - Vision */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to be a leading force in the industry, consistently
              pushing boundaries and setting new standards of excellence. We aim to
              revolutionize the way businesses operate, offering innovative tools
              that drive success and growth.
            </p>
          </div>

          {/* Right Side - Values */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔️</span> Integrity in all our actions
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔️</span> Innovation to stay ahead
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔️</span> Commitment to excellence
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔️</span> Customer-centric approach
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="#contact"
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
