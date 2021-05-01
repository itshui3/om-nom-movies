import React, { useEffect, useState } from 'react';
import './App.css';

import SearchController from './components/Search/SearchController';

interface Result {
    "Title": string;
    "Year": string;
    "imdbID": string;
    "Type": string;
    "Poster": string;
}

let searchResultInit: Result[] = [];

function App() {

    const [searchResults, setSearchResults] = useState(searchResultInit);

return (
<>
<div className='App'>
    <SearchController />
</div>
</>
);
}

export default App;
