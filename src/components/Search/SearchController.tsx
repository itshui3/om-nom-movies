import React, { useState } from 'react'

import ctrl_styles from './SearchStyles/SearchController.module.css';

import SearchInput from './SearchInput';
import SearchCategory from './SearchCategory';

interface Props {}

function SearchControls(props: Props) {
    const [category, setCategory] = useState('');

    const assignCategory = (category: string) => {
        setCategory(category);
        console.log(category);
    }

return (
<>
<div className={ctrl_styles.search_cont}>
    <SearchCategory assignCategory={assignCategory} />
    <SearchInput category={category} />
</div>
</>
)
}

export default SearchControls;