import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: "https://filmster.netlify.app",
      code: "https://github.com/16Utkarsh-Raj/Filmster-Movie-Review-Frontend",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "https://filmster.netlify.app",
      code: "https://github.com/16Utkarsh-Raj/Multi-Calculator.git",
    },
    {
      id: 3,
      src: navbar,
      demo: "https://filmster.netlify.app",
      code: "https://github.com/16Utkarsh-Raj/Filmster-Movie-Review-Frontend",
    },
    {
      id: 4,
      src: reactSmooth,
      demo: "https://filmster.netlify.app",
      code: "https://github.com/16Utkarsh-Raj/Filmster-Movie-Review-Frontend",
    },
    {
      id: 5,
      src: installNode,
      demo: "https://filmster.netlify.app",
      code: "https://github.com/16Utkarsh-Raj/Filmster-Movie-Review-Frontend",
    },
    {
      id: 6,
      src: reactWeather,
      demo: "https://filmster.netlify.app",
      code: "https://github.com/16Utkarsh-Raj/Filmster-Movie-Review-Frontend",
    },
  ];

  const handleOpenLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleOpenLink(demo)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleOpenLink(code)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
