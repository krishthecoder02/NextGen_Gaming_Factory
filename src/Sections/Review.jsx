import React from "react";
import ReactPlayer from "react-player";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const Review = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold font-serif text-white">
          Review
        </h1>
        <ReactPlayer url={video1} controls={true} />
        <ReactPlayer url={video2} controls={true} />
        <ReactPlayer url={video3} controls={true} />
      </div>
    </div>
  );
};

export default Review;
