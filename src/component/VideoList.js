// src/component/VideoList.js
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import './VideoList.css';

const VideoList = ({ videos, onSelect }) => {
  const playerRefs = useRef([]);

  const handleFullscreen = (index) => {
    const player = playerRefs.current[index];
    if (player) {
      const videoElement = player.getInternalPlayer();
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { /* Firefox */
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
        videoElement.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div key={index} className="video-item">
          <ReactPlayer
            ref={(el) => (playerRefs.current[index] = el)}
            url={video.url}
            controls
            width="100%"
            height="100%"
          />
          <div className="video-title">{video.title}</div>
          <button onClick={() => handleFullscreen(index)}>Полный экран</button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
