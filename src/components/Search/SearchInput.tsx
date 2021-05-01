import React, { useState } from 'react'

import input_styles from './SearchStyles/SearchInput.module.css';

interface Props {
    category: string
}

function SearchInput(props: Props) {

    const [searchTerm, setSearchTerm] = useState('');

return (
<>
<input
className={input_styles.input}
placeholder='Search Om-Nom-DB'
value={searchTerm}
onChange={(ev) => setSearchTerm(ev.target.value)}
/>

</> 
)
}

export default SearchInput;