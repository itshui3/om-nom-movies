
import React from 'react';

import MovieCardMini from './MovieCardMini';
import CrossSVG from '../../svg/CrossSVG';

import { Result } from '../../interfaces/Result';

interface Props {
    movie: Result,
    id: number,
    removeNom: Function,
    startDrag: Function,
    dragCoords: [number, number]
}

function MovieCardNoms(props: Props) {

    const {movie, id, removeNom} = props;
    const {dragCoords, startDrag} = props;
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
!isNaN(dragCoords[0])
?
<div
style={{
    position: 'absolute',
    left: `${dragCoords[0]}px`,
    top: `${dragCoords[1]}px`
}}>
    <MovieCardMini 
    key={id} 
    movieData={movie} 
    addOrRemove={() => removeNom(movie.imdbID)}
    startDrag={() => startDrag(id)}>
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