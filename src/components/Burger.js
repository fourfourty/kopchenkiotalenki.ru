import React from 'react';
import '../scss/styles.scss';
import '../scss/header.scss';

const Burger = ({ active,setActive}) => {
    return (
        <div className={!active ? 'burger-a__burger burger' : ' burger-a__burger burger fixed'} 
          onClick={() => {
            setActive(!active);
            }}>
            <span className={!active ? 'burger__span' : ' burger__span menuActive-rotate-1'}></span>
            <span className={!active ? 'burger__span' : ' burger__span menuActive-rotate-2'}></span>
            <span className={!active ? 'burger__span' : ' burger__span menuActive-rotate-3'}></span>
          </div>
    )
}

export default Burger;