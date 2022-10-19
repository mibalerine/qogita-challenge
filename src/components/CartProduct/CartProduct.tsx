import { CartProduct as CartProductType, useCart } from "../../pages/cart/observer";

type Props = {
    item: CartProductType;
};

const CartProduct = ({ item }: Props) => {
    const { actions } = useCart()

    const incrementQuantity = () => {
        if(item.quantity === undefined) item.quantity = 0;
        
        item.quantity++;
        actions.setProductQuantity(item);
    };

    const decrementQuantity = () => {
        if(item.quantity === undefined || item.quantity === 0)return;
        
        item.quantity--;
        actions.setProductQuantity(item);
    };

    return (
        <ul className="max-w-2xl divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-10 h-10 rounded-full" src={item.imageUrl} alt={item.name}/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <button onClick={incrementQuantity} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">+</button>
                            <span>Quantity: {item.quantity}</span>
                            <button onClick={decrementQuantity} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">-</button>
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{item.recommendedRetailPrice} {item.recommendedRetailPriceCurrency}</div>
                    <div >
                    <button onClick={()=> actions.removeFromCart(item.gtin)} type="button" className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Remove Item</button>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default CartProduct;