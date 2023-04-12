import React from "react";
import { Link } from "react-scroll";

const nav = [
  { id: "about", name: "About" },
  { id: "features", name: "Features" },
  { id: "services", name: "Services" },
  { id: "gallery", name: "Gallery" },
];

const MobileMenu = () => {
  return (
    <div className="pb-20">
      <ul className="flex flex-wrap gap-8 pt-10">
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
                <h1 className="text-xs font-semibold ">{navigation.name}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="block border mx-auto w-fit mt-5 items-end px-10 py-2 text-gray-50 bg-yellow-700 hover:bg-yellow-500 rounded-full transition duration-500">
        Book Appointment
      </button>
    </div>
  );
};

export default MobileMenu;
