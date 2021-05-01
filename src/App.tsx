import React, { useEffect } from 'react';
import './App.css';

import SearchController from './components/Search/SearchController';

import { connectOMDb } from './api/connectMovies';
import { searchByTitle } from './api/searchByTitle';

function App() {

  // useEffect(() => {
  //   searchByTitle('Fight');
  // }, []);
return (
<>
<div className='App'>
    <SearchController />
</div>
</>
);
}

export default App;
