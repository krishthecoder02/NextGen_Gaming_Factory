import React from "react";
import ff1 from "../assets/freefire1.jpg";
import ff2 from "../assets/freefire2.jpg";
import ff3 from "../assets/freefire3.jpg";
import ff4 from "../assets/freefire4.jpg";
import ff5 from "../assets/freefire5.jpg";
import ff6 from "../assets/freefire6.jpg";

const Hero = () => {
  // const handleClick = () => {
  //   window.location.href = "https://chat.whatsapp.com/Fy5oJ2ieYbVIRSfKElxF5I";
  // };

  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeeBrNJ477uUWlGI0cHfv09RmWpxEQ-5iZIyAhTgyTycsLcgw/viewform?usp=dialog",
      "_blank"
    );
  };

  return (
    <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom w-[100vw]  sm:p-16 mb-5">
      <div>
        <div className=" text-center ">
          <h1 className="font-extrabold text-3xl sm:text-7xl text-white p-12">
            Turn Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Gaming
            </span>{" "}
            Skill
          </h1>

          <h1 className="font-extrabold text-3xl sm:text-6xl text-white">
            To{" "}
            <span className="text-3xl sm:text-6xl  bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Earning
            </span>{" "}
            Skill
          </h1>
          <button
            className="bg-[#00a8d1] mt-10 px-3 py-2 rounded-lg text-white font-bold text-2xl sm:text-4xl sm:p-5 shadow-xl ring-1 ring-slate-900/5"
            onClick={handleClick}
          >
            Message Me
          </button>
        </div>
        <div
          className="flex flex-row flex-wrap
         justify-center  gap-1 "
        >
          <a className="bg-[#14161b] p-2 rounded-lg  items-center  mt-10 border border-blue-500">
            <img
              src={ff1}
              alt="ss1"
              className="rounded-md sm:w-60"
              width={160}
            />
            <p className="font-bold text-white">Puspa Gamer</p>
            <p className="font-bold text-white">
              Earning: <span className="text-green-600">~17k/month</span>
            </p>
          </a>
          <div className="bg-[#14161b] p-2 rounded-lg  items-center  mt-10 border border-blue-500">
            <img
              src={ff2}
              alt="ss1"
              className="rounded-md sm:w-60"
              width={160}
            />
            <p className="font-bold text-white">M1MX B4K</p>
            <p className="font-bold text-white">
              Earning: <span className="text-green-600">~60k/month</span>
            </p>
          </div>
          <div className="bg-[#14161b] p-2 rounded-lg  items-center  mt-10 border border-blue-500">
            <img
              src={ff3}
              alt="ss1"
              className="rounded-md sm:w-60"
              width={160}
            />
            <p className="font-bold text-white">OMG FREE FIRE</p>
            <p className="font-bold text-white">
              Earning: <span className="text-green-600">~15k/month</span>
            </p>
          </div>
          <div className="bg-[#14161b] p-2 rounded-lg  items-center  mt-10 border border-blue-500">
            <img
              src={ff4}
              alt="ss1"
              className="rounded-md sm:w-60"
              width={160}
            />
            <p className="font-bold text-white">ZX Azad</p>
            <p className="font-bold text-white">
              Earning: <span className="text-green-600">~19k/month</span>
            </p>
          </div>
          <div className="bg-[#14161b] p-2 rounded-lg  items-center  mt-10 border border-blue-500">
            <img
              src={ff5}
              alt="ss1"
              className="rounded-md sm:w-60"
              width={160}
            />
            <p className="font-bold text-white">Sohan FF</p>
            <p className="font-bold text-white">
              Earning: <span className="text-green-600">~21k/month</span>
            </p>
          </div>
          <div className="bg-[#14161b] p-2 rounded-lg  items-center  mt-10 border border-blue-500">
            <img
              src={ff6}
              alt="ss1"
              className="rounded-md sm:w-60"
              width={160}
            />
            <p className="font-bold text-white">Shadow Apartan </p>
            <p className="font-bold text-white">
              Earning: <span className="text-green-600">~Not yet</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
