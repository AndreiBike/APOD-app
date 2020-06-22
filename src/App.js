import React from 'react';
import DateChooser from './components/Date/Date';
import TodayImage from './components/TodayImage/TodayImage';
import reduxPersistStore from './components/Redux/reduxStore';
import ImagesList from './components/ImagesList/ImagesList'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    
    <PersistGate loading={null} persistor={reduxPersistStore().reduxPersistor}>
      <Provider store={reduxPersistStore().reduxStore}>
        <div className="App">
          <DateChooser />
          <Route path='/' component = {TodayImage}/>
          <ImagesList />
        </div>
      </Provider>
    </PersistGate>
  );
}

export default App;