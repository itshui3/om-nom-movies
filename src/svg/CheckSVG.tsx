
import React, { useEffect, useState } from 'react';
interface Props {
    hasNom: boolean;
}

function CheckSVG(props: Props) {
    const { hasNom } = props;
    // const [hidden, setHidden] = useState(hasNom);

    // useEffect(() => {
    //     console.log('in checkSVG', hasNom);
    //     setHidden(hasNom);
    // }, [hasNom]);

return (
<>
    <svg height="12" width="12"
    style={
        {zIndex: 1, display: hasNom? 'block': 'none', position: 'absolute'}
    }
    >
    <line x1="0" y1="6" x2="6" y2="12"
    stroke="rgba(0, 0, 0, 0.55)"
    strokeWidth="1" />
    <line x1="6" y1="12" x2="12" y2="0"
    stroke="rgba(0, 0, 0, 0.55)"
    strokeWidth="1" />
    </svg>
</>
)
}

export default CheckSVG
