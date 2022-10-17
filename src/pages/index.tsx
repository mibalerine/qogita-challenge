import React,{useEffect, useState} from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product/Product';
import { ProductsResponse } from '../types';
import { getProducts } from '../services/products';



const HomePage = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

  const listItems = productsResponse?.results.map((product) =>
    <Product item={product}></Product>
  );
  
  useEffect(()=>{
    getProducts()
      .then((res: ProductsResponse) => setProductsResponse(res))
  });
  

  return (<Layout>
    <h1>Products</h1>
    <div>{listItems}</div>
    <h2>Total: {productsResponse?.count}</h2>
  </Layout>);
};

export default HomePage;
