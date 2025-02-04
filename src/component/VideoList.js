// src/component/VideoList.js
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import './VideoList.css';

const VideoList = ({ videos, onSelect }) => {
  const playerRefs = useRef([]);

  const handleFullscreen = (index) => {
    const player = playerRefs.current[index];
    if (player && screenfull.isEnabled) {
      screenfull.request(player.wrapper);
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

