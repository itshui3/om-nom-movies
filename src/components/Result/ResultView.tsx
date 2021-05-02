
import React, { useEffect, useState } from 'react'

import MovieCardMini from './MovieCardMini';

import { Result } from '../../interfaces/Result';

interface Props {
    movies: Result[],
    error: boolean,
    addNom: Function
}

function ResultView(props: Props) {
    const { movies, error, addNom } = props;

return (
<>
{
!error
?
movies.map(m => (
<MovieCardMini movieData={m} addNom={addNom} />
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
