import CartProduct from '../../components/CartProduct/CartProduct';
import Layout from '../../components/Layout/Layout';
import { CartProduct as CartProductType, cartStore } from './observer';
 
const CartPage = () => {
  const cartProducts: CartProductType[] = cartStore.get();

  const listItems = cartProducts.map((product: CartProductType) => 
    <CartProduct item={product} key={product.gtin}/>
  );
  
  return <Layout>
    <h1 className="font-medium leading-tight text-4xl mt-0 mb-2">Cart</h1>
    <div>{listItems}</div>
  </Layout>
};

export default CartPage;
