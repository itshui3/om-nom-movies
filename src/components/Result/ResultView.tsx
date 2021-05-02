
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import MovieCardMini from './MovieCardMini';

import CheckSVG from '../../svg/CheckSVG';
import CrossSVG from '../../svg/CrossSVG';

import { Result } from '../../interfaces/Result';

interface Props {
    movies: Result[],
    error: boolean,
    addNom: Function,
    nommed: Set<string>
}

function ResultView(props: Props) {
    const { movies, error, addNom, nommed } = props;

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
                addNom={addNom} 
                nommed={nommed}>
                    <CheckSVG hasNom={nommed.has(m.imdbID)} />
                </MovieCardMini>));
        } else return movies[0].Title;
    }
}
/>

<Route path='/noms'
render={() => movies.map((m, id) => (
    <MovieCardMini 
    key={id} 
    movieData={m} 
    addNom={addNom} 
    nommed={nommed}>
        <CrossSVG />
    </MovieCardMini>))}
/>

</div>
</>
)
}

export default ResultView
