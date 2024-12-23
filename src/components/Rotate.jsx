import barbie from "../assets/barbie.jpg";
import a from "../assets/12.jpg"
import avatar from "../assets/avatar.jpg"
import avengers from "../assets/avengers.jpg"
import dark from "../assets/dark.jpg"
import god from "../assets/god.jpg"
import guardian from "../assets/guardians.jpg"
import killer from "../assets/killer.jpg"
import little from "../assets/little.jpg"
import noway from "../assets/noway.jpg"
import tenet from "../assets/tenet.jpg"
import openheimer from "../assets/openheimer.jpg";
import spider from "../assets/spidermna.jpg";
import mission from "../assets/mission.jpg";
import john from "../assets/johnwick.jpg";

import React from "react";

const Rotate = ({ direction }) => {
  const movies = [
    { name: "Barbie", src: barbie },
    { name: "12AngryMen", src: a},
    { name: "Avatar", src: avatar},
    { name: "JohnWick", src: john },
    { name: "Avenger:Endgame", src: avengers},
    { name: "SpiderMan", src: spider },
    { name: "DarkKnight", src: dark},
    { name: "TheGodFather", src: god},
    { name: "Openheimer", src: openheimer },
    { name: "Tenet", src: tenet},
    { name: "Mission", src: mission },
    { name: "NoWayHome", src: noway},
    { name: "killers", src: killer},
    { name: "Guardians", src: guardian},
    { name: "LittleMermaid", src: little},
  ];

  const createImageSet = (setNumber) => (
    <div className="flex" key={`set-${setNumber}`}>
      {movies.map((movie, index) => (
        <div
          key={`${setNumber}-${index}`}
          className="w-24 sm:w-32 md:w-36 lg:w-40" 
        >
          <div className="relative group">
            <img
              src={movie.src}
              alt={movie.name}
              className="w-full h-16 sm:h-20 md:h-24 lg:h-28 object-cover rounded-lg 
                        border-2 border-white transition-transform duration-300 
                        group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                          flex items-center justify-center transition-opacity duration-300
                          rounded-lg">
              <span className="text-white text-xs sm:text-sm font-semibold">{movie.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-orange-600 overflow-hidden py-2 sm:py-3 md:py-4 lg:py-5">
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animation-scrollL {
          animation: scrollLeft 40s linear infinite;
        }
        .animation-scrollR {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>
      <div className="relative flex">
        <div className={`flex whitespace-nowrap ${direction === "scrollR" ? "animation-scrollR" : "animation-scrollL"}`}>
          {[1, 2, 3, 4].map((setNumber) => createImageSet(setNumber))}
        </div>
      </div>
    </div>
  );
};

export default Rotate;