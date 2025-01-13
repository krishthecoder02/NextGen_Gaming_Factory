import React from "react";
import ReactPlayer from "react-player";
import QR from "../assets/frame.png";

const About = () => {
  return (
    <div className="p-3 flex flex-wrap flex-col justify-center items-center">
      <h1 className="text-3xl my-8 font-extrabold text-white font-serif text-center">
        About <span className="text-[#00a8d1]">NextGen</span>
      </h1>
      <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-xl">
        <p className="text-white font-bold">
          Join our live class and discover how to transform your gaming skills
          into a profitable earning opportunity! This interactive session allows
          you to ask questions and clear your doubts in real-time. Don't miss
          the chance to level up your skills and start earning!
        </p>
      </div>
      <div className="border-4 border-cyan-600 sm:w-96 rounded-lg  flex justify-center bg-slate-100 mt-5">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=6YnryDjEGr8&t=123s"
          controls={true}
          width={320}
          height={265}
        />
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 mt-4 flex flex-col p-4 rounded-lg">
        <h1 className="text-center font-bold text-white mb-2 text-xl">
          Key Highlights of the Course:
        </h1>
        <p className="font-semibold text-gray-100">
          * Direct Mentorship: Get my personal contact number for direct
          guidance.
        </p>
        <p className="font-semibold text-gray-100">
          * 1-on-1 Doubt Clearing: Clear your doubts through personal calls for
          better understanding.
        </p>
        <p className="font-semibold text-gray-100">
          * You are a member of my Free Fire community.
        </p>
      </div>
      <h1 className="mt-4 text-2xl font-bold text-white">What You Learn</h1>

      <ul className="text-2xl m-4 ">
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white text-xl">
            Week 1:
            <span className="text-lg text-zinc-700">
              Foundation & Skill Development
            </span>{" "}
          </span>
        </p>
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white text-xl">
            Week 2:{" "}
            <span className="text-lg text-zinc-700">
              Video Editing & Short Content
            </span>{" "}
          </span>{" "}
        </p>
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white">
            Week 3:{" "}
            <span className="text-lg text-zinc-700">
              Thumbnail Design & Content Optimization
            </span>
          </span>{" "}
        </p>
        <p className="bg-yellow-600 rounded-lg p-3 mb-2">
          <span className="font-bold text-white">
            Week 4:{" "}
            <span className="text-lg text-zinc-700">
              Streaming, Earning & Career Growth
            </span>
          </span>
        </p>
      </ul>
      <div>
        <p
          className="text-white text-2xl
         font-extrabold text-center"
        >
          Join Group
        </p>
        <img src={QR} alt="QR code" width={300} className="sm:w-400" />
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 my-6 p-4 rounded-lg">
          <h2 className="text-center text-xl">
            <a
              href="tel:6299172019"
              class="text-white font-bold underline hover:text-blue-700"
            >
              📞 Call Me: 6299172019
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
