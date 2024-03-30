import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearCart = ()=> {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto mt-5">
                <button className="text-white bg-black p-2 rounded-md" onClick={()=> {
                    handleClearCart();
                }}>Clear cart</button>
                {cartItems.length == 0 && <h1 className="text-2xl">Your cart is empty, please add items.</h1>} 
                <ItemList items = {cartItems} />
            </div>
        </div>
    );
}

export default Cart;