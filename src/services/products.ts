import axios from 'axios';

export async function getProducts(pageNum: number = 1){
    return await axios.get(`http://localhost:3000/api/products?page=${pageNum}`).then(content => content.data);
}

export async function getProduct(gtin: string){
    return await axios.get(`http://localhost:3000/api/products/${gtin}`).then(content => content.data);
}