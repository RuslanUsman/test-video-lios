// src/App.js
import React, { useState } from 'react';
import SearchBar from './component/SearchBar';
import VideoList from './component/VideoList';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([
    { title: 'город', url: 'https://www.youtube.com/watch?v=hSLmOjklqXs' },
    { title: 'пегас', url: 'https://rutube.ru/video/private/c78c19622543df3d222b1854122eb3eb/?p=x9_PxkFHMNuqAvhSZ0ahxw' },
    { title: 'машина', url: 'https://www.youtube.com/watch?v=example3' },
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


