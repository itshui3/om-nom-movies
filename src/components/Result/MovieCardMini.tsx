
import React from 'react'

import miniCardStyle from '../Result/ResultStyles/MovieCardMini.module.css';

import { Result } from '../../interfaces/Result'

interface Props {
    movieData: Result
}

function MovieCardMini(props: Props) {
    const { movieData } = props;

return (
<>
<div className={miniCardStyle.card_cont}>
    <img src={movieData.Poster} className={miniCardStyle.movie_img}
    alt={`The ${movieData.Type} ${movieData.Title}, produced in ${movieData.Year}`} />
    <p className={miniCardStyle.movie_title}>
    {movieData.Title} ({movieData.Year})
    </p>
    
</div>
</>
)
}

export default MovieCardMini
