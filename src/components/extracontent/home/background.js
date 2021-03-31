import React, { Component } from "react";
// import Video from "../../assets/backgroundVideo.mp4";
// import BGVideo from "../../assets/bgVideo.mp4";
import NewVideo from "../../assets/bgVideo2.mp4";

class BackgroundVideo extends Component {
  render() {
    return (
      <div>
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-3",
          }}
        >
          <source src={NewVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default BackgroundVideo;
