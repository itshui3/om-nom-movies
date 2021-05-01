import React, { useState } from 'react'

import input_styles from './SearchStyles/SearchInput.module.css';

import { searchMovies } from '../../api/searchOptions';

interface Props {
    passResults: Function
}

function SearchInput(props: Props) {
    const { passResults } = props;

    const [searchTerm, setSearchTerm] = useState('');

    const sendQuery = (input: string) => {
        console.log(searchMovies(input));
    }

return (
<>
<input
className={input_styles.input}
placeholder='Search Om-Nom-DB'
value={searchTerm}
onChange={(ev) => setSearchTerm(ev.target.value)}
/>
<div
className={input_styles.sendBtn}
onClick={() => sendQuery(searchTerm)}
>Send</div>

</> 
)
}

export default SearchInput;