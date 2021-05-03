
import React, { useState } from 'react';

import BoxSVG from '../../svg/BoxSVG';

import miniCardStyle from '../Result/ResultStyles/MovieCardMini.module.css';

import { Result } from '../../interfaces/Result';

interface Props {
    movieData: Result,
    children: JSX.Element,
    addOrRemove: Function
}

function MovieCardMini(props: Props) {
    const { movieData, addOrRemove } = props;

    const [nomText, setNomText] = useState('Nom!');

return (
<>
<div className={miniCardStyle.card_cont}>

    <img className={miniCardStyle.movie_img}
    src={movieData.Poster} 
    alt={`The ${movieData.Type} ${movieData.Title}, produced in ${movieData.Year}`} />

    <p className={miniCardStyle.movie_title}>
    {movieData.Title} ({movieData.Year})
    </p>
    <div className={miniCardStyle.checkbox_cont}
    onMouseDown={() => setNomText('owo;')}
    onMouseUp={() => setNomText('Nom!')}
    onMouseLeave={() => setNomText('Nom!')}

    onClick={() => addOrRemove()}>
    <BoxSVG>
    {
    props.children
    }
    </BoxSVG>
    <p className={miniCardStyle.nomText}>{nomText}</p>
    </div>
</div>
</>
)
}

export default MovieCardMini;