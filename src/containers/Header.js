import React from 'react';
import Menu from './Menu.js';
import Burger from '../components/Burger.js';
import { useState } from 'react';
import '../scss/styles.scss';
import '../scss/header.scss';
import Logo from '../img/logo3.png';



const Header = () => {
  //хук useState

  const [menuActive, setMenuActive] = useState(false);
  const items = [
    {className:'scrollto-1',value: 'Продукция',href: 'products'},
    {className:'scrollto-2',value: 'О нас',href: 'about'},
    {className:'scrollto-3',value: 'Контакты',href: 'contacts'},
  ];
  return (
    <div className="page-a" onWheel={() => setMenuActive(false)}>
      <div className="page-a__wrapper wrapper">
        <div className="page-a__menu">
          
          {
          <Burger 
            active={menuActive} 
            setActive={setMenuActive} 
          />
          }
          {
            <Menu 
            active={menuActive} 
            setActive={setMenuActive} 
            headers={'Меню'} 
            items={items}/> 
          }
            
        </div>
        <div className="page-a__about header-about">
          <div className="header-about__body">
          <div className="page-a__logo">
          <img src={Logo} className="page-a__img" alt="logo"></img>
        </div>
          <p className="header-about__discript">Мы&nbsp;занимаемся изготовлением
            и&nbsp;продажей копченого мяса и&nbsp;птицы.
            Копчение происходит на&nbsp;ольховых щепках, что придает нашей 
            продукции идеальный аромат и&nbsp;вкус.
            Наша продукция производится только из&nbsp;натурального сырья,
            выросшего на&nbsp;территории Абхазии и Краснодарского края.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;