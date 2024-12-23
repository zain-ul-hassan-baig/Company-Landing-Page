import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  

  return (
    <div>
     {/* Navbar */}
     <Navbar />
      {/* Sections */}
      <div className="mt-16">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-200"
        >
          <About />
        </section>

        <section
          id="services"
          className="min-h-screen flex items-center justify-center bg-gray-300"
        >
          <Services />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-400"
        >
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

// import React from "react";

// const App = () => {
//   return (
//     <div className="bg-gradient-to-r from-purple-900 to-black min-h-screen text-white">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-8 py-4 relative">
//         <div className="text-2xl font-bold">Wardiere Inc.</div>
//         <ul className="hidden md:flex space-x-6">
//           <li className="hover:text-pink-400 cursor-pointer">Home</li>
//           <li className="hover:text-pink-400 cursor-pointer">About Us</li>
//           <li className="hover:text-pink-400 cursor-pointer">Price</li>
//           <li className="hover:text-pink-400 cursor-pointer">Login</li>
//         </ul>
//         <button className="bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-500 transition">
//           Start for free
//         </button>

//         {/* Live Indicator */}
//         <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-pink-600 opacity-50" style={{ height: '2px' }}></div>

//       </nav>

//       {/* Hero Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12">
//         {/* Text Section */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
//             Increase your <br />
//             <span className="text-pink-400">Business</span> with us!
//           </h1>
//           <p className="text-gray-300 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam.
//           </p>
//           <button className="bg-pink-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-pink-500 transition">
//             REGISTER NOW
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
//           <div className="relative">
//             <img
//               src="./home.jpg"
//               alt="Team Meeting"
//               className="rounded-full w-80 h-80 object-cover shadow-lg"
//             />
//             <div className="absolute top-0 left-0 w-24 h-24 bg-pink-600 opacity-30 rounded-full mix-blend-multiply animate-pulse"></div>
//             <div className="absolute bottom-0 right-0 w-12 h-12 bg-pink-600 rounded-full animate-bounce"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

