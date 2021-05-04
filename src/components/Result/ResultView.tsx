
import React from 'react';
import { Route } from 'react-router-dom';

import MovieCardMini from './MovieCardMini';
import MovieCardResult from './MovieCardResult';
import MovieCardNoms from './MovieCardNoms';

import CheckSVG from '../../svg/CheckSVG';
import CrossSVG from '../../svg/CrossSVG';

import resultStyles from './ResultStyles/ResultView.module.css';

import { Result } from '../../interfaces/Result';

interface Props {
    movies: Result[],
    error: boolean,
    addNom: Function,
    removeNom: Function,
    nommed: Set<string>,
    startDrag: Function,
    dragId: number,
    dragCoords: [number, number]
}

function ResultView(props: Props) {
    // general noms
    const { movies, error, addNom, removeNom, nommed } = props;
    // drag api
    const {startDrag, dragId, dragCoords} = props;

return (
<>
<div className={resultStyles.cont}>
<Route path='/search' 
render={() => {

if(!error) {
    return movies.map((m, id) => (
        <MovieCardResult
        key={id}
        id={id}
        movie={m}
        nommed={nommed}
        addNom={addNom}
        />
    ));
} else return movies[0].Title;

}}/>

<Route path='/noms'
render={() => movies.map((m, id) => (

<MovieCardNoms 
key={id}
id={id}
movie={m}
removeNom={removeNom}
startDrag={startDrag}
dragCoords={dragCoords}
dragId={dragId}
/>

))}/>

</div>
</>
)
}

export default ResultView;