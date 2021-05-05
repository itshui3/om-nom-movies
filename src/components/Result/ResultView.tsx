
import React from 'react';
import { Route } from 'react-router-dom';

import MovieCardResult from './MovieCardResult';
import MovieCardNoms from './MovieCardNoms';

import resultStyles from './ResultStyles/ResultView.module.css';

import { Result } from '../../interfaces/Result';

interface Props {
    movies: Result[],
    error: boolean,
    addNom: Function,
    removeNom: Function,
    nommed: Set<string>,
    startDrag: Function,
    dragId: number
}

function ResultView(props: Props) {
    // general noms
    const { movies, error, addNom, removeNom, nommed } = props;
    // drag api
    const {startDrag, dragId} = props;

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
dragId={dragId}
/>

))}/>

</div>
</>
)
}

export default ResultView;