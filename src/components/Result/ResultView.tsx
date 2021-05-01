
import React, { useEffect, useState } from 'react'

import MovieCardMini from './MovieCardMini';

import { Result } from '../../interfaces/Result';

interface Props {
    movies: Result[]
}

function ResultView(props: Props) {
    const { movies } = props;

return (
<>
{
movies.map(m => (<MovieCardMini movieData={m} />))
}
</>
)
}

export default ResultView
