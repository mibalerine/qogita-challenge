import CartProduct from "../../components/CartProduct/CartProduct";
import Layout from "../../components/Layout/Layout";
import { CartProduct as CartProductType, cartStore, useCart } from "./observer";

const CartPage = () => {
  const { state: cartProducts } = useCart();

  const listItems = cartProducts.map((product: CartProductType) => (
    <CartProduct item={product} key={`${product.gtin}-${product.quantity}`} />
  ));

  const sumCartTotal: number = cartProducts.reduce(
    (sum, current) =>
      sum + (current.quantity ?? 1) * current.recommendedRetailPrice,
    0
  );

  //Considering all products in the cart have the same currency:
  const cartCurrency: string =
    cartProducts.length > 0
      ? cartProducts[0].recommendedRetailPriceCurrency
      : "";

  return (
    <Layout>
      <h1 className="font-medium leading-tight text-4xl mt-0 mb-2">Cart</h1>
      {cartProducts.length ? (
        <div>
          <div>{listItems}</div>
          <p className="max-w-2xl text-right">
            <span className="mr-8 text-xl">Total</span>
            <span className="text-3xl font-bold">
              {sumCartTotal.toFixed(2)} {cartCurrency}
            </span>
          </p>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </Layout>
  );
};

export default CartPage;
