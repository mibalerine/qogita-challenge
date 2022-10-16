import axios from 'axios';

export async function getProducts(){
    return await axios.get('http://localhost:3000/api/products').then(content => content.data);
}