
import produce from 'immer';

import React, { useState } from 'react';
import './App.css';

import { Route, Redirect, useHistory } from 'react-router-dom';

import SearchController from './components/Search/SearchController';
import ResultView from './components/Result/ResultView';

import { Result } from './interfaces/Result';
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
let dragCoordsInit: [number, number] = [NaN, NaN];

const buildErrorResult = (error: string): Result[] => {
    return [{ "Title": error, "Year": '', "imdbID": '', "Type": '', "Poster": '' }];
}

function App() {
    const history = useHistory();

    const [searchResults, setSearchResults] = useState(searchResultInit);
    const [responseFoo, setResponseFoo] = useState(false);

    const [nommed, setNommed] = useState(nommedCacheInit);
    const [nomList, setNomList] = useState(nomListInit);

    const [dragItem, setDragItem] = useState(NaN);
    const [dragCoords, setDragCoords] = useState(dragCoordsInit);

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

    const startDrag = (id: number) => {
        setDragItem(id);

        const onMouseMove = (event: MouseEvent) => {
            console.log(event.clientX, event.clientY);
        }

        document.addEventListener('mousemove', onMouseMove);

        const onMouseUp = () => {
            setDragItem(NaN);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            
        }

        document.addEventListener('mouseup', onMouseUp);
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
                startDrag={startDrag}

                dragId={dragItem}
                dragCoords={dragCoords}
                />)
        } />

        <Route path='/noms' render={
            () => (<ResultView 
                movies={nomList} 
                error={false} 
        
                addNom={addNom}
                removeNom={removeNom}
                nommed={nommed}
                startDrag={startDrag}

                dragId={dragItem}
                dragCoords={dragCoords}
                />)
        } />

        <div className='nav_cont'>
            <div className='nav_item'
            onClick={() => history.push('/search')}>Search</div>
            <div className='nav_item'
            onClick={() => history.push('/noms')}>Noms</div>
        </div>

    </div>
</div>
</>
);
}

export default App;