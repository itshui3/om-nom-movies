
import produce from 'immer';

import React, { useEffect, useState } from 'react';
import './App.css';

import { Route, Redirect } from 'react-router-dom';

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
let nomListInit: Result[] = [];
let nommedCacheInit: Set<string> = new Set();

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

    const [nommed, setNommed] = useState(nommedCacheInit);
    const [nomList, setNomList] = useState(nomListInit);

    useEffect(() => {
        console.log(nommed, nomList);
    }, [nommed, nomList]);

    const addNom = (nom: Result) => {
        if (nommed.has(nom.imdbID)) return;
        setNommed(produce(nommed, draft => {
            draft.add(nom.imdbID);
            return draft;
        }));

        setNomList(produce(nomList, draft => {
            draft.push(nom);
            return draft;
        }));

    }

    const removeNom = (id: string) => {
        
        setNommed(produce(nommed, draft => {
            draft.delete(id);
            return draft;
        }));

        setNomList(produce(nomList, draft => {
            return draft.filter((nom) => nom.imdbID !== id);
        }));
    }

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
    {/* depending on route, render with check / cross children */}
    <ResultView 
    movies={searchResults} 
    error={responseFoo} 

    addNom={addNom} 
    nommed={nommed}
    />
</div>
</>
);
}

export default App;
