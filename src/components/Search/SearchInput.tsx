import React, { useState } from 'react'

import input_styles from './SearchStyles/SearchInput.module.css';

import { searchMovies } from '../../api/searchOptions';

import { Result } from '../../interfaces/Result';

interface Props {
    passResults: Function,
    passError: Function
}

function SearchInput(props: Props) {
    const { passResults, passError } = props;

    const [searchTerm, setSearchTerm] = useState('');

    const sendQuery = async (input: string) => {
        let resp = await searchMovies(input);

        if (resp?.Response === "True") {
            passResults(resp?.Search);
        } else {
            passError(resp.Error);
        }
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