
import React from 'react'

interface Props {}

function SearchSVG(props: Props) {

return (
<>
<div
style={
    {zIndex: 1, position: 'relative', right: '70px', top: '3px'}
}
>
    <svg width="22" height="22">

        <circle cx="6" cy="6" r="5" 
        stroke="black"
        fill="none"/>

        <line x1="10" y1="10" x2="15" y2="15"
        stroke="rgba(0, 0, 0, 0.55)"
        strokeWidth="1" />

    </svg>
</div>
</>
)
}

export default SearchSVG;