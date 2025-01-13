import React from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/About"); // Navigate to the About page
  };

  const handleClick = () => {
    window.location.href = "https://chat.whatsapp.com/Fy5oJ2ieYbVIRSfKElxF5I";
  };

  // const handleClick = () => {
  //   window.open(
  //     "https://docs.google.com/forms/d/e/1FAIpQLSeeBrNJ477uUWlGI0cHfv09RmWpxEQ-5iZIyAhTgyTycsLcgw/viewform?usp=dialog",
  //     "_blank"
  //   );

  // };

  return (
    <div className="bg-[#0B1120] sm:h-[56px] h-16 flex justify-between items-center sm:fixed w-full">
      <img
        src={logo}
        alt="logo"
        width={90}
        height={100}
        className="sm:ml-14 sm:h-11 sm:w-28"
      />
      <div className="mr-3 flex items-center sm:mr-12">
        <a
          href="/"
          className="text-white sm:block sm:mr-20 hidden font-bold font-serif"
        >
          Channel
        </a>
        <a
          href="tel:6299172019"
          className="text-white mr-4 font-bold font-serif underline"
          // onClick={handleAbout}
        >
          Call me
        </a>
        <a href="/" className="text-white mr-2 sm:mr-8 font-bold font-serif">
          Review
        </a>
        <button
          className="text-white text-xs bg-[#0ea5e9] px-3 py-1 rounded-lg sm:text-lg font-bold font-serif hover:bg-[#064968] mr-3"
          onClick={handleClick}
        >
          Join Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
