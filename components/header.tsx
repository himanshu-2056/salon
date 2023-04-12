import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const nav = [
  { id: "about", name: "About" },
  { id: "features", name: "Features" },
  { id: "services", name: "Services" },
  { id: "gallery", name: "Gallery" },
  { id: "testimonials", name: "Testimonials" },
];

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`py-5 fixed top-0 z-20 w-full ${
        scroll ? "bg-yellow-500 text-white" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <h1
            className={`text-3xl font-bold uppercase ${
              scroll ? "text-white" : "text-yellow-600"
            }`}
          >
            Salon
          </h1>
        </Link>
        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-yellow-800 "
            onClick={() => setClick(!click)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {nav.map((navigation, index) => {
            return (
              <li key={index}>
                <Link
                  to={navigation.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  <h1 className="text-sm font-semibold ">{navigation.name}</h1>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {click && (
        <div className="block md:hidden bg-yellow-500 rounded-lg shadow-2xl w-[150px] text-white absolute right-6 px-5 py-4">
          <ul
            className={`${
              click ? "flex flex-col" : "hidden"
            } md:hidden gap-8 transition duration-500`}
          >
            {nav.map((navigation, index) => {
              return (
                <li key={index}>
                  <Link
                    to={navigation.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <h1 className="font-semibold ">{navigation.name}</h1>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
