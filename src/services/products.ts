import axios from "axios";

export async function getProducts(pageNum: number = 1) {
  return await axios
    .get(`http://localhost:3000/api/products?page=${pageNum}`)
    .then((content) => content.data);
}
