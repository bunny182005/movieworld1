import logo from "../assets/logo.png"
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";
import Rotate from "../components/Rotate";

const Main = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}! Welcome to MovieWorld.`);
    setName(""); 
  };
  
    return (
      <div className="w-full min-h-screen">
        <Rotate direction="scrollR"/>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-40 sm:pt-60 md:pt-80 
                      pb-40 sm:pb-60 md:pb-80 bg-black px-4 sm:px-8">
          <div className="flex flex-col items-center justify-center text-white">
            <div className="flex items-center text-3xl sm:text-4xl md:text-5xl text-center">
              Hello from MovieWorld
              <img src={logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 ml-2" />
            </div>
            
            <div className="flex mt-4 text-base sm:text-lg md:text-xl text-center">
              <span className="mr-2">Here you can</span>
              <div className="text-orange-500">
                <Typewriter
                  options={{
                    strings: [
                      "Discover Exciting New Movies",
                      "See What's Popular Right Now",
                      "Favorite Movies You Love",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <label className="text-white mb-2 text-center">
                Enter your name:
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ml-2 p-1 rounded text-orange-600 bg-gray-200 
                            w-48 sm:w-64 md:w-72 mt-2"
                />
              </label>
              <Link to="/popular">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-orange-600 text-white px-3 py-1 rounded 
                            cursor-pointer hover:bg-orange-500 mt-2"
                />
              </Link>
            </form>
          </div>
        </div>
  
        <div className="absolute bottom-0 w-full">
          <Rotate direction="scrollL"/>
        </div>
      </div>
    );
  };

export default Main;



