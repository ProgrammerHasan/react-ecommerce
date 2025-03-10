import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice.ts";

export default function CartSidebar({ isOpen, toggleCart }: { isOpen: boolean; toggleCart: () => void }) {
    const cart = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <button onClick={toggleCart} className="p-2 bg-gray-800 text-white w-full">Close</button>
            <div className="p-4">
                {cart.length === 0 ? (
                    <p>Cart is empty</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="border-b py-2">
                            <img src={item.image} alt={item.title} className="h-12" />
                            <p>{item.title} - ${item.price} x {item.quantity}</p>
                            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
