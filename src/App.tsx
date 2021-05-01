import React, { useEffect, useState } from 'react';
import './App.css';

import SearchController from './components/Search/SearchController';
import ResultView from './components/Result/ResultView';

import { Result } from './interfaces/Result'

let searchResultInit: Result[] = [];

function App() {

    const [searchResults, setSearchResults] = useState(searchResultInit);

    useEffect(() => {
        console.log(searchResults);
    }, [searchResults]);

return (
<>
<div className='App'>
    <SearchController passResults={(results: Result[]) => setSearchResults(results)} />
    <ResultView movies={searchResults} />
</div>
</>
);
}

export default App;
