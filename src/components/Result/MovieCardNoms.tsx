
import React from 'react';

import MovieCardMini from './MovieCardMini';
import CrossSVG from '../../svg/CrossSVG';

import { Result } from '../../interfaces/Result';

interface Props {
    movie: Result,
    id: number,
    removeNom: Function,
    startDrag: Function,
    dragId: number
}

function MovieCardNoms(props: Props) {

    const {movie, id, removeNom} = props;
    const {startDrag, dragId} = props;
/*
if dragged {
    render twice, but also in a positioned div wrapper
}
*/

return (
<>
<div
style={{
    visibility: dragId === id ? 'hidden' : 'visible'
}}
>
<MovieCardMini 
key={id} 
movieData={movie} 
addOrRemove={() => removeNom(movie.imdbID)}
startDrag={() => startDrag(id)}>
    <CrossSVG />
</MovieCardMini>
</div>

</>

)
}

export default MovieCardNoms;