
import React, { useEffect, useState } from 'react'

import MovieCardMini from './MovieCardMini';

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
{
!error
?
movies.map((m, id) => (
<MovieCardMini key={id} movieData={m} addNom={addNom} nommed={nommed} />
))
:
(<div
style={{
    fontSize: '.9rem',
    margin: '5px'
}}
>
{movies[0].Title}
</div>)
}
</>
)
}

export default ResultView
