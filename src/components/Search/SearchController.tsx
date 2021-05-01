import React, { useState } from 'react'

import ctrl_styles from './SearchStyles/SearchController.module.css';

import SearchInput from './SearchInput';

interface Props {}

function SearchControls(props: Props) {

return (
<>
<div className={ctrl_styles.search_cont}>

    <SearchInput />
</div>
</>
)
}

export default SearchControls;