import React from "react";
import ReactPlayer from "react-player";

const Review = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-4">
      <div className="border-2 border-cyan-600 rounded-lg w-72 flex justify-center bg-slate-300">
        <ReactPlayer
          url="https://www.youtube.com/shorts/8m0XBK82jEQ"
          controls={true}
          width={300}
        />
      </div>
      <div className="border-2 w-72 border-cyan-600 rounded-lg flex justify-center bg-slate-100">
        <ReactPlayer
          url="https://www.youtube.com/shorts/8m0XBK82jEQ"
          controls={true}
          width={300}
        />
      </div>
      <div className="border-2 border-cyan-600 rounded-lg w-72 flex justify-center bg-slate-100">
        <ReactPlayer
          url="https://www.youtube.com/shorts/8m0XBK82jEQ"
          controls={true}
          width={300}
        />
      </div>
    </div>
  );
};

export default Review;
