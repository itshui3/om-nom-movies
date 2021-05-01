import React, { useEffect, useState } from 'react';
import './App.css';

import SearchController from './components/Search/SearchController';
import ResultView from './components/Result/ResultView';

import { Result } from './interfaces/Result'
/*
    "Title": string;
    "Year": string;
    "imdbID": string;
    "Type": string;
    "Poster": string;
*/

let searchResultInit: Result[] = [];
const buildErrorResult = (error: string): Result[] => {
    return [
        {
            "Title": error, "Year": '', "imdbID": '', "Type": '', "Poster": ''
        }
    ]
}

function App() {

    const [searchResults, setSearchResults] = useState(searchResultInit);
    const [responseFoo, setResponseFoo] = useState(false);

    useEffect(() => {
        console.log(searchResults);
    }, [searchResults]);

return (
<>
<div className='App'>
    <SearchController 
    passResults={(results: Result[]) => {
        setSearchResults(results);
        setResponseFoo(false);
    }} 
    passError={(error: string) => {
        setSearchResults(buildErrorResult(error));
        setResponseFoo(true);
    }}
    />
    <ResultView movies={searchResults} error={responseFoo} />
</div>
</>
);
}

export default App;
