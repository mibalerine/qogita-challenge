import { useCart } from '../../pages/cart/observer';
import { Product as ProductType } from '../../types';

type Props = {
    item: ProductType;
};

const Product = ({ item }: Props) => {
    const { actions } = useCart();

    return (
    <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={item.imageUrl} alt={item.name}/>
        <div className="px-6 py-4">
            <div className="font-bold text-l mb-2">{item.name}</div>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{item.recommendedRetailPrice} {item.recommendedRetailPriceCurrency}</span>
                <button onClick={()=> actions.addToCart(item)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
            </div>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.categoryName}</span>
        </div>
    </div>
  );
};
  
export default Product;
  