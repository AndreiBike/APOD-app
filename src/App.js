import React from 'react';
import Date from './components/Date/Date'
import ImagesList from './components/ImagesList/ImagesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Date />
      <TodayImage />
      <ImagesList />
    </div>
  );
}

export default App;