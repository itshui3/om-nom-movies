
import React, { useEffect, useState } from 'react'

import MovieCardMini from './MovieCardMini';

import { Result } from '../../interfaces/Result';

interface Props {
    movies: Result[],
    error: boolean
}

function ResultView(props: Props) {
    const { movies, error } = props;

return (
<>
{
!error
?
movies.map(m => (<MovieCardMini movieData={m} />))
:
(<div>
{movies[0].Title}
</div>)
}
</>
)
}

export default ResultView
