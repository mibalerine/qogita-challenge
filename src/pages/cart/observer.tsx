import { useEffect, useMemo, useState } from "react";
import { Observable } from "../../observers/observable";
import { Product } from "../../types";

export const cartStore = new Observable<Product[]>([]);

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>(cartStore.get());

    useEffect(() => {
        return cartStore.subscribe(setCart);
    }, []);

  const actions = useMemo(() => {
    return {
      addToCart: (item: Product) => cartStore.set([...cart, item]), 
    }
  }, [cart])

  return {
    state: cart,
    actions
  }
}