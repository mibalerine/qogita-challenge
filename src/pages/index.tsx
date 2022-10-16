import React,{useEffect, useState} from 'react';
import Layout from '../components/Layout';
import { ProductsResponse } from '../types';
import { getProducts } from '../services/products';



const HomePage = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

  const listItems = productsResponse?.results.map((product) =>
    <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">{product.name}</li>
  );
  
  useEffect(()=>{
    getProducts()
      .then((res: ProductsResponse) => setProductsResponse(res))
  });
  

  return (<Layout>
    <h1>Products</h1>
    <ol>{listItems}</ol>
  </Layout>);
};

export default HomePage;
