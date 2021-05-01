import React, { useState } from 'react';

import ctrl_styles from './SearchStyles/SearchController.module.css';

import SearchInput from './SearchInput';

interface Props {
    passResults: Function
}

function SearchControls(props: Props) {

return (
<>
<div className={ctrl_styles.search_cont}>

    <SearchInput passResults={props.passResults} />
</div>
</>
)
}

export default SearchControls;