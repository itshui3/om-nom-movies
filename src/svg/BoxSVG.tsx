
import React from 'react'

import boxStyles from './styles/BoxSVG.module.css';

interface Props {
    children: JSX.Element[] | JSX.Element
}

function BoxSVG(props: Props) {

return (
<>
<div className={boxStyles.box_cont}>
    {
        props.children
    }
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
</div>
</>
)
}

export default BoxSVG
