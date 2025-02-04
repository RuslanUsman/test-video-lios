// src/App.js
import React, { useState } from 'react';
import SearchBar from './component/SearchBar';
import VideoList from './component/VideoList';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([
    { title: 'пегас', url: process.env.PUBLIC_URL + '/videos/пегас.mp4' },
    { title: 'гиганторог', url: process.env.PUBLIC_URL + '/videos/гиганторог.mp4' },
    { title: 'литой волк', url: process.env.PUBLIC_URL + '/videos/литой волк.mp4' },
    //... Добавляйте свои видео здесь
  ]);
  const [, setSelectedVideo] = useState(null);

  const handleSearch = (query) => {
    console.log('Поисковый запрос:', query); // Выводим запрос в консоль
    const foundVideos = videos.filter(video => video.title.toLowerCase().includes(query.toLowerCase()));
    console.log('Найденные видео:', foundVideos); // Выводим найденные видео в консоль

    // Обновляем список видео, чтобы найденное видео было на первом месте
    if (foundVideos.length > 0) {
      setVideos([foundVideos[0], ...videos.filter(video => video !== foundVideos[0])]);
      setSelectedVideo(foundVideos[0]);
    }
  };

  const handleSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="App">
      <h1>Видео Поиск</h1>
      <SearchBar onSearch={handleSearch} />
      <VideoList videos={videos} onSelect={handleSelect} />
    </div>
  );
};





export default App;