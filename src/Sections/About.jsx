import React from "react";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div className="p-3 flex flex-wrap flex-col justify-center items-center">
      <h1 className="text-3xl my-8 font-extrabold text-white font-serif text-center">
        About <span className="text-[#00a8d1]">NextGen</span>
      </h1>
      <div className="bg-gradient-to-r from-red-600 to-green-600 p-4 rounded-xl">
        <p className="text-white font-bold">
          We Are Providing Live Class About How You Can turn Your Gaming Skill
          Into Earning Skill This Is Live Module You Can Ask Your Dout Live
        </p>
      </div>
      <div className="border-4 border-cyan-600 rounded-lg  flex justify-center bg-slate-100 mt-5">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=6YnryDjEGr8&t=123s"
          controls={true}
          width={380}
          height={265}
        />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-white">What You Learn</h1>

      <ul className="text-2xl m-4 ">
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white">Firt Week : </span> Basic About
          Gaming Preview Other Channel
        </p>
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white">Secound Week : </span> Basic
          About Gaming Preview Other Channel
        </p>
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white">Third Week : </span> Basic
          About Gaming Preview Other Channel
        </p>
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white">Forth Week : </span> Basic
          About Gaming Preview Other Channel
        </p>
      </ul>
      <hr />
    </div>
  );
};

export default About;
