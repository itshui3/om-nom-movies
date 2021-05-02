import React from 'react'

interface Props {
}

function CrossSVG(props: Props) {

return (
<>
    <svg height="12" width="12"
    style={
        {zIndex: 1, display: 'block', position: 'absolute'}
    }
    >
    <line x1="0" y1="0" x2="12" y2="12"
    stroke="rgba(0, 0, 0, 0.55)"
    strokeWidth="1" />
    <line x1="0" y1="12" x2="12" y2="0"
    stroke="rgba(0, 0, 0, 0.55)"
    strokeWidth="1" />
    </svg>
</>
)
}

export default CrossSVG
