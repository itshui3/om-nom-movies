
import React, { useState, useEffect } from 'react'

import BoxSVG from '../../svg/BoxSVG';
import CheckSVG from '../../svg/CheckSVG';
import CrossSVG from '../../svg/CrossSVG';

import miniCardStyle from '../Result/ResultStyles/MovieCardMini.module.css';

import { Result } from '../../interfaces/Result';

interface Props {
    movieData: Result,
    addNom: Function
}

function MovieCardMini(props: Props) {
    const { movieData, addNom } = props;

    const [hidden, setHidden] = useState(false);
    const [nomText, setNomText] = useState('Nom!');

    useEffect(() => {
        // check id against set
    }, [movieData.imdbID]);

return (
<>
<div className={miniCardStyle.card_cont}>
    <img src={movieData.Poster} className={miniCardStyle.movie_img}
    alt={`The ${movieData.Type} ${movieData.Title}, produced in ${movieData.Year}`} />
    <p className={miniCardStyle.movie_title}>
    {movieData.Title} ({movieData.Year})
    </p>
    <div className={miniCardStyle.checkbox_cont}
    onMouseDown={() => setNomText('owo;')}
    onMouseUp={() => setNomText('Nom!')}
    onMouseLeave={() => setNomText('Nom!')}

    onClick={() => addNom(movieData)}
    >
    <BoxSVG>
        {/* <CrossSVG hidden={hidden} /> */}
        <CheckSVG hidden={hidden} />
    </BoxSVG>
    <p className={miniCardStyle.nomText}>{nomText}</p>
    </div>
</div>
</>
)
}

export default MovieCardMini;