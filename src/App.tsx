
import produce from 'immer';

import React, { useState, useRef } from 'react';
import './App.css';

import { Route, Redirect, useHistory } from 'react-router-dom';

import SearchController from './components/Search/SearchController';
import ResultView from './components/Result/ResultView';

import MovieCardMini from './components/Result/MovieCardMini';
import CrossSVG from './svg/CrossSVG';

import { performDrag } from './helpers/performDrag';

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

    const dragItemRef = useRef<HTMLDivElement | null>(null);

    // React.useEffect(() => {
    //     console.log('new drag item: ', dragItem);
    // }, [dragItem]);

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

    const startDrag = (id: number) => (shift: [number, number]) => {
        setDragItem(id);
        const onMouseMove = (event: MouseEvent) => {
            setDragCoords([event.clientX - shift[0], event.clientY - shift[1]]);

            const DOMdragItem = dragItemRef.current;

            if (!DOMdragItem) return;

            DOMdragItem.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            DOMdragItem.hidden = false;

            if (elemBelow?.id.split('_')[0] !== 'nom') return;

            const swapId = +elemBelow?.id.split('_')[1];

            // state closed nomLists are out of date for some reason
            setNomList((nomList) => {

                setDragItem((capturedDragId) => {
                    if (isNaN(capturedDragId)) return capturedDragId;
                    if (swapId === capturedDragId) return capturedDragId;

                    // occurs after this closure is returned
                    setNomList(performDrag(capturedDragId, swapId, nomList));
                    return swapId;
                });

                return nomList;

            })

 
        }

        document.addEventListener('mousemove', onMouseMove);

        const onMouseUp = () => {
            setDragItem(NaN);
            setDragCoords([NaN, NaN]);
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
                />)
        } />

        {

        !isNaN(dragItem) && !isNaN(dragCoords[0])
        ?
        <div
        ref={dragItemRef}
        style={{
            position: 'absolute', zIndex: 2, 
            left: `${!isNaN(dragCoords[0]) ? dragCoords[0]-10 : '0'}px`,
            top: `${!isNaN(dragCoords[1]) ? dragCoords[1]-10 : '0'}px`
        }}
        id='draggedItem'>
            <MovieCardMini 
            key={dragItem} 
            movieData={nomList[dragItem]} 
            addOrRemove={() => removeNom(nomList[dragItem].imdbID)}
            startDrag={() => startDrag(dragItem)}>
                <CrossSVG />
            </MovieCardMini>
        </div>
        :
        null

        }

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