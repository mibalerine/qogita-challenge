import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Product from "../components/Product/Product";
import type { Product as ProductType, ProductsResponse } from "../types";
import { getProducts } from "../services/products";
import Pagination from "../components/Pagination/Pagination";
import { paginationStore, usePagination } from "./homepage/paginationObserver";
import { SIZE } from "./api/products";

const HomePage = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>({
    count: 0,
    page: 1,
    results: [],
  });
  const pagination = usePagination();

  useEffect(() => {
    getProducts(pagination.state.pageNum).then((res: ProductsResponse) => {
      setProductsResponse(res);
      pagination.actions.calculateTotalPages(res.count);
    });
  }, [pagination.state.pageNum]);

  const listItems = (productsResponse.results ?? []).map(
    (product: ProductType) => (
      <Product item={product} key={product.gtin}></Product>
    )
  );

  return (
    <Layout>
      <h1 className="font-medium leading-tight text-4xl mt-0 mb-2">Products</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {listItems}
      </div>

      <Pagination />
    </Layout>
  );
};

//TODO: Server-side rendering: Nextjs pre-renders the page - prevents slow client-side rendering
// export async function getServerSideProps() {
//   return { props: {serverSideProducts: (await getProducts())} }
// }

export default HomePage;
