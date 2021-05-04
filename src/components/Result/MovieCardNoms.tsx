
import React from 'react';

import MovieCardMini from './MovieCardMini';
import CrossSVG from '../../svg/CrossSVG';

import { Result } from '../../interfaces/Result';

interface Props {
    movie: Result,
    id: number,
    removeNom: Function,
    startDrag: Function,
    dragCoords: [number, number],
    dragId: number
}

function MovieCardNoms(props: Props) {

    const {movie, id, removeNom} = props;
    const {dragCoords, startDrag, dragId} = props;
/*
if dragged {
    render twice, but also in a positioned div wrapper
}
*/

return (
<>
<MovieCardMini 
key={id} 
movieData={movie} 
addOrRemove={() => removeNom(movie.imdbID)}
startDrag={() => startDrag(id)}>
    <CrossSVG />
</MovieCardMini>

{
dragId === id
?
<div
style={{position: 'absolute', zIndex: 2}}
id='draggedItem'>
    <MovieCardMini 
    key={id} 
    movieData={movie} 
    addOrRemove={() => removeNom(movie.imdbID)}
    startDrag={startDrag(id)}>
        <CrossSVG />
    </MovieCardMini>
</div>
:
null
}
</>

)
}

export default MovieCardNoms;