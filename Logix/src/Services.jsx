import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen bg-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Our Services
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Development</h3>
            <p className="text-gray-600">
              We create responsive and high-performance websites that are tailored to your needs, ensuring a seamless user experience.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mobile App Development</h3>
            <p className="text-gray-600">
              Our mobile app development services deliver high-quality apps for both iOS and Android platforms, ensuring great performance and design.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">SEO Optimization</h3>
            <p className="text-gray-600">
              Our SEO services help improve your website's search engine rankings, driving more traffic and enhancing your online visibility.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">
              We offer cloud-based solutions that provide scalable and secure infrastructure, helping your business grow without limitations.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">IT Consulting</h3>
            <p className="text-gray-600">
              Our IT consulting services guide businesses in choosing the right technology solutions, ensuring smooth and efficient operations.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Digital Marketing</h3>
            <p className="text-gray-600">
              Our digital marketing services include SEO, social media, content marketing, and more to help you reach your target audience effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
