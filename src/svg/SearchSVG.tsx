
import React from 'react'

interface Props {}

function SearchSVG(props: Props) {

return (
<>
<svg height="20" width="20">
<line x1="0" y1="0" x2="20" y2="0"
stroke="black"
strokeWidth="1" />
<line x1="0" y1="0" x2="0" y2="20"
stroke="black"
strokeWidth="1" />
<line x1="0" y1="20" x2="20" y2="20"
stroke="black"
strokeWidth="1" />
<line x1="20" y1="0" x2="20" y2="20"
stroke="black"
strokeWidth="1" />
</svg>
</>
)
}

export default SearchSVG
