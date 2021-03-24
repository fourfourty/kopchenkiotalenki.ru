import React, { useState } from 'react';
import '../scss/products.scss';
import '../scss/header.scss';
import '../scss/styles.scss';
import '../scss/modal.scss';

const ProductsItem = ({ name,img,price,composition,weight }) => {
  let [btnActive,setBtnActive] = useState(false);
  return (
    <li className="products__item">
      <img className="products__img" src={img} alt="img"></img>
      <div className="products__info">
        <span className="products__discript">{name}</span>
        <button className="products__btn"
        onClick={() => setBtnActive(btnActive = true)}>Подробнее</button>
      </div>
      <div className={!btnActive ? "products__modal modal modal-hide" : "products__modal modal modal-show"}>
        <div className="modal__wrapper wrapper">
        <div className="modal__toggle" onClick={() => { setBtnActive(btnActive = false)
        }}>
        <span className="modal__mark"></span>
        <span className="modal__mark"></span>
        </div>
        <div className="modal__info">
          <span className="modal__name">{name}</span>
          <span className="modal__composition">Состав: {composition}</span>
          <span className="modal__weight">Вес: {weight}</span>
          <span className="modal__price">Цена: {price} руб.</span>
        </div>
        </div>
      </div>
    </li>
  )
}

export default ProductsItem;