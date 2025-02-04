// src/component/VideoList.js
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoList.css';

const VideoList = ({ videos, onSelect }) => {
  const playerRefs = useRef([]);

  useEffect(() => {
    videos.forEach((video, index) => {
      const player = videojs(playerRefs.current[index], {
        controls: true,
        autoplay: false,
        preload: 'auto',
        sources: [
          { src: video.url, type: 'video/mp4' },
          // Добавьте другие источники с разным качеством здесь
          // { src: 'path/to/video-2160p.mp4', type: 'video/mp4', label: '2160p' },
          // { src: 'path/to/video-1440p.mp4', type: 'video/mp4', label: '1440p' },
          // { src: 'path/to/video-1080p.mp4', type: 'video/mp4', label: '1080p' },
          // { src: 'path/to/video-720p.mp4', type: 'video/mp4', label: '720p' },
          // { src: 'path/to/video-480p.mp4', type: 'video/mp4', label: '480p' },
          // Добавьте другие источники здесь
        ],
      });

      return () => {
        if (player) {
          player.dispose();
        }
      };
    });
  }, [videos]);

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div key={index} className="video-item" onClick={() => onSelect(video)}>
          <video
            ref={(el) => (playerRefs.current[index] = el)}
            className="video-js"
            controls
            width="100%"
            height="100%"
          />
          <div className="video-title">{video.title}</div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;


