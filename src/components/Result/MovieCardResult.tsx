
import React from 'react';

import MovieCardMini from './MovieCardMini';
import CheckSVG from '../../svg/CheckSVG';

import { Result } from '../../interfaces/Result';

interface Props {
    movie: Result,
    nommed: Set<string>,
    id: number,
    addNom: Function
}

function MovieCardResult(props: Props) {
    const {movie, nommed, id, addNom} = props

return (
<>
<MovieCardMini 
key={id} 
movieData={movie} 
addOrRemove={() => addNom(movie)}
startDrag={() => null}>
    <CheckSVG hasNom={nommed.has(movie.imdbID)} />
</MovieCardMini>
</>
)
}

export default MovieCardResult;