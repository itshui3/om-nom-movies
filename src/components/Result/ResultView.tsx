
import React from 'react';
import { Route } from 'react-router-dom';

import MovieCardMini from './MovieCardMini';

import CheckSVG from '../../svg/CheckSVG';
import CrossSVG from '../../svg/CrossSVG';

import { Result } from '../../interfaces/Result';

interface Props {
    movies: Result[],
    error: boolean,
    addNom: Function,
    removeNom: Function,
    nommed: Set<string>
}

function ResultView(props: Props) {
    const { movies, error, addNom, removeNom, nommed } = props;

return (
<>
<div style={{display: 'flex', flexDirection: 'column'}}>
<Route path='/search' 
render={() => {

if(!error) {
    return movies.map((m, id) => (
        <MovieCardMini 
        key={id} 
        movieData={m} 
        addOrRemove={() => addNom(m)}>
            <CheckSVG hasNom={nommed.has(m.imdbID)} />
        </MovieCardMini>));
} else return movies[0].Title;

}}/>

<Route path='/noms'
render={() => movies.map((m, id) => (

<MovieCardMini 
key={id} 
movieData={m} 
addOrRemove={() => removeNom(m.imdbID)}>
    <CrossSVG />
</MovieCardMini>

))}/>

</div>
</>
)
}

export default ResultView
