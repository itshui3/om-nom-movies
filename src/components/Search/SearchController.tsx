import React from 'react';

import ctrl_styles from './SearchStyles/SearchController.module.css';

import SearchInput from './SearchInput';

interface Props {
    passResults: Function,
    passError: Function
}

function SearchControls(props: Props) {

return (
<>
<div className={ctrl_styles.search_cont}>

    <SearchInput passResults={props.passResults} passError={props.passError} />
</div>
</>
)
}

export default SearchControls;