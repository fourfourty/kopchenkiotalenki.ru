import React from 'react';
import '../scss/products.scss';
import '../scss/header.scss';
import ProductsData from '../components/productsData.js';
import OnLoadingGoodsData from '../components/LoadingGoodsData.js';
import axios from 'axios';
import { useState,useEffect } from 'react';


const Products = () => {

  const DataLoading = OnLoadingGoodsData(ProductsData);
  const [appState, setAppState] = useState({
    loading:false,
    goods: null
  });

  useEffect(() => {
    
   try { setAppState({loading: true})
    const apiUrl = 'http://kopchenkiotalenki.ru/goods/pork.json';
    axios.get(apiUrl).then((resp) => {
      const allGoods = resp.data;
      setAppState({
        loading: false,
        goods: allGoods
         });
    });
  }
  catch(error) {
    return console.log(error);
  }
  }, [setAppState]);
    return (
    <section className="page-b">
      <a name="products">{null}</a>
      <DataLoading isLoading={appState.loading} goods={appState.goods} />
    </section>
    )
}

export default Products;