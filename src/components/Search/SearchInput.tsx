import React, { useState } from 'react'

import input_styles from './SearchStyles/SearchInput.module.css';

import { searchMovies } from '../../api/searchOptions';

import { Result } from '../../interfaces/Result';

interface Props {
    passResults: Function
}

interface OMDbResponse {
    data: {
        Search: Result[]
    }
}

function SearchInput(props: Props) {
    const { passResults } = props;

    const [searchTerm, setSearchTerm] = useState('');

    const sendQuery = async (input: string) => {
        let resp = await searchMovies(input);

        if (resp?.Response) {
            
            if (resp?.Search?.length) {
                console.log(resp.Search);
                passResults(resp.Search);
            }
        } else {
            console.log('response failed!');
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