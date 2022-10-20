import { useEffect, useMemo, useState } from "react";
import { Observable } from "../../observers/observable";
import { Product } from "../../types";

export interface CartProduct extends Product {
  quantity?: number;
}

export const cartStore = new Observable<CartProduct[]>([]);

export const useCart = () => {
  const [cart, setCart] = useState<CartProduct[]>(cartStore.get());

  useEffect(() => {
    return cartStore.subscribe(setCart);
  }, []);

  const addToCart = (item: CartProduct) => {
    const productsIds = cart.map((prod) => prod.gtin);

    const idxExistingItem = productsIds.indexOf(item.gtin);

    if (idxExistingItem !== -1) {
      //product already exists in cart. increment quantity.

      let existingProduct = cart[idxExistingItem];
      if (existingProduct.quantity == undefined) {
        existingProduct.quantity = 0;
      }

      existingProduct.quantity++;
      cartStore.set(cart);
    } else {
      //new product to cart. add to cart with quantity = 1.
      item.quantity = 1;
      cartStore.set([...cart, item]);
    }
  };

  const removeFromCart = (gtin: string) => {
    const newCart: CartProduct[] = cart.filter((prod) => prod.gtin !== gtin);
    cartStore.set(newCart);
  };

  const setProduct = (item: CartProduct) => {
    const itemIdxInCart: number = cart.findIndex(
      (prod) => prod.gtin === item.gtin
    );
    const tempCart = [...cart];

    tempCart[itemIdxInCart] = item;
    cartStore.set(tempCart);
  };

  const actions = useMemo(() => {
    return {
      addToCart,
      removeFromCart,
      setProduct,
    };
  }, [cart]);

  return {
    state: cart,
    actions,
  };
};
