// src/component/VideoList.js
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoList.css';

const VideoList = ({ videos, onSelect }) => {
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div key={index} className="video-item" onClick={() => onSelect(video)}>
          <ReactPlayer url={video.url} controls width="100%" height="100%" />
          <div className="video-title">{video.title}</div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
