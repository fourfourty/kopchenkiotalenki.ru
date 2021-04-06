import * as React from 'react';
import scrollTo from '../components/scrollTo.js';
import '../scss/styles.scss';
import '../scss/header.scss';

const Menu = ( { headers,items,active,setActive } ) => {

    const setClassName = (show,hide) => {
        return active ? show : hide;
    }
    return (
        <nav className={setClassName('page-a__nav header__nav active','page-a__nav header__nav')}
        onClick={() => setActive(false)} onScroll={() => setActive(false)}>
            <div className={setClassName('page-a__blur-modal', 'hide')}></div>
            <div className="page-a__menu-header">{headers}</div>
                <ul className="header-nav__lists">
                    {
                        items.map(item => {
                            return (
                                <li className="header-nav__item" key={Math.random()}>
                                    <a className={`header-nav__link ${item.className}`} 
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo(item.href);
                                    }}                                 
                                    >{item.value}</a>
                                </li>
                            )
                        })
                    }       
                </ul>
        </nav>
        //динамически задаем класс
        // <nav className={active ? 'page-a__nav header__nav active' : 'page-a__nav header__nav'}
        // onClick={() => setActive(false)}>
        //     <div className={active ?}></div>
        //     <div className="page-a__menu-header">{headers}</div>
        //         <ul className="header-nav__lists">
        //             {
        //                 items.map(item => {
        //                     return (
        //                         <li className="header-nav__item" key={Math.random()}>
        //                             <a className={`header-nav__link ${item.className}`} 
        //                             href={item.href}
        //                             onClick={(e) => {
        //                                 e.preventDefault();
        //                                 scrollTo(item.href);
        //                             }}                                 
        //                             >{item.value}</a>
        //                         </li>
        //                     )
        //                 })
        //             }       
        //         </ul>
        // </nav>
    )
}

export default Menu;