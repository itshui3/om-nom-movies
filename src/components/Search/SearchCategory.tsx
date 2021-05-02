/*
component deprecated
*/

import React, { useState, useEffect } from 'react';

import cat_styles from './SearchStyles/SearchCategory.module.css';

interface Props {
    assignCategory: Function
}

function SearchCategory(props: Props) {
    const [showCats, setShowCats] = useState(false);
    const [selectedCat, setSelectedCat] = useState('Title');

    useEffect(() => props.assignCategory(selectedCat), [selectedCat]);

    const toggleCatView = () => setShowCats(!showCats);
    const selectCat = (cat: string) => {
        setSelectedCat(cat);
        setShowCats(!showCats);
    }

return (
<>
<div className={cat_styles.cat_cont}>
    <div className={cat_styles.sel_category}
    onClick={toggleCatView}
    >{selectedCat}</div>
    {/* hide-toggle search-categories */}
    <div className={cat_styles.search_categories}
    style={showCats ? {display: 'block'} : {display: 'none'}}>
        <div className={cat_styles.category}
        onClick={() => selectCat('Title')}>Title</div>
        <div className={cat_styles.category}
        onClick={() => selectCat('Title')}>Title</div>
        <div className={cat_styles.category}
        onClick={() => selectCat('Id')}>ID</div>

    </div>
</div>
</>
)
}

export default SearchCategory;