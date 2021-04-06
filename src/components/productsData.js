import React from 'react';
import ProductsItem from './Products-item.js';


const ProductsData = (props) => {
    const {goods} = props;
    if(!goods || goods.length === 0) {
        return <li>Нет данных</li>
    }
    return (
        <React.Fragment>
            <h2 className="page-b__head headers">Наша продукция</h2>
            <div className="page-b__wrapper wrapper">
                <div className="page-b__products products">
                    <ul className="products__lists">
                        {
                        goods.map(good => {
                          return (
                            <ProductsItem 
                            key={good.id}
                            name={good.name}
                            img={good.image}
                            price={good.price}
                            composition={good.composition}
                            weight={good.weight}
                            />
                          )
                        }) 
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsData;