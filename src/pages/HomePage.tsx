import React,{useEffect, useState} from 'react';
import Layout from '../components/Layout/Layout';
import Product from '../components/Product/Product';
import { ProductsResponse } from '../types';
import { getProducts } from '../services/products';
import Pagination from '../components/Pagination/Pagination';

const HomePage = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  let pageNum: number = 1;

  
  useEffect(()=>{    
    getProducts(pageNum)
      .then((res: ProductsResponse) => setProductsResponse(res))
  }, []);
  
  const listItems = productsResponse?.results.map((product) =>
    <Product item={product} key={product.gtin}></Product>
  );

  

  return (<Layout>
    <h1>Products</h1>
    <div>{listItems}</div>

    <Pagination pageNum={pageNum}></Pagination>
  </Layout>);
};

export default HomePage;
