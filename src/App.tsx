
import produce from 'immer';

import React, { useEffect, useState } from 'react';
import './App.css';

import { Route, Redirect, Link } from 'react-router-dom';

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
        console.log('called add Nom');
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
        console.log('called remove Nom');
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
<Redirect to='/search' />
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
    <div className='body'>
        <Route path='/search' render={
            () => (<ResultView 
                movies={searchResults} 
                error={responseFoo} 
        
                addNom={addNom}
                removeNom={removeNom}
                nommed={nommed}
                />)
        } />

        <Route path='/noms' render={
            () => (<ResultView 
                movies={nomList} 
                error={false} 
        
                addNom={addNom}
                removeNom={removeNom}
                nommed={nommed}
                />)
        } />

        <div>
            <Link to='/search'>Search</Link>
            <Link to='/noms'>Noms</Link>
        </div>

    </div>
</div>
</>
);
}

export default App;
