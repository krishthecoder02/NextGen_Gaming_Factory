import React from "react";
import ReactPlayer from "react-player";

const Review = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <ReactPlayer
        url="https://www.youtube.com/shorts/8m0XBK82jEQ"
        controls={true}
        width={250}
      />
      <ReactPlayer
        url="https://www.youtube.com/shorts/8m0XBK82jEQ"
        controls={true}
        width={250}
      />
      <ReactPlayer
        url="https://www.youtube.com/shorts/8m0XBK82jEQ"
        controls={true}
        width={250}
      />
    </div>
  );
};

export default Review;
