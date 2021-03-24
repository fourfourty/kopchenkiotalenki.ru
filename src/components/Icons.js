import React from 'react';
import IconsSVG from '../img/icons.svg';

const Icons = ({ name,color,size,className}) => {
    return (
            <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
              <use xlinkHref={`${IconsSVG}#${name}`} />
            </svg>
    )
}

export default Icons;