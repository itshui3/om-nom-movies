
import React, { useState, useRef } from 'react';

import BoxSVG from '../../svg/BoxSVG';

import miniCardStyle from '../Result/ResultStyles/MovieCardMini.module.css';

import { Result } from '../../interfaces/Result';

interface Props {
    movieData: Result,
    children: JSX.Element,
    addOrRemove: Function,
    startDrag: Function
}

function MovieCardMini(props: Props) {
    const { movieData, addOrRemove, startDrag } = props;

    const [nomText, setNomText] = useState('Nom!');

    const cardContRef = useRef<HTMLDivElement | null>(null);

    const handleDrag = (ev: React.MouseEvent) => {
        const clickX = ev.clientX;
        const clickY = ev.clientY;

        let boundX: number = 0;
        let boundY: number = 0;

        const node = cardContRef.current;
        if (node) {
            boundX = node.getBoundingClientRect().left;
            boundY = node.getBoundingClientRect().top;
        }

        startDrag([clickX - boundX, clickY - boundY]);
    }

return (
<>
<div className={miniCardStyle.card_cont}
draggable={false}
ref={cardContRef}
onMouseDown={(ev) => handleDrag(ev)}
>

    <img className={miniCardStyle.movie_img}
    src={movieData.Poster} 
    alt={`The ${movieData.Type} ${movieData.Title}, produced in ${movieData.Year}`} 
    draggable={false} />

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