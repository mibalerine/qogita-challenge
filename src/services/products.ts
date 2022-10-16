const axios = require('axios').default;

export function getProducts(){
    return axios.get('http://localhost:3000/api/products');
}