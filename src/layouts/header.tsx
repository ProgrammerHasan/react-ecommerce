import { useState } from "react";
import { useSelector } from "react-redux";
import CartSidebar from "../components/CartSidebar.tsx";

export default function Header() {
    const [isCartOpen, setCartOpen] = useState(false);
    const cartItems = useSelector((state: any) => state.cart.items?.length);

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="text-lg font-bold">My Cart</h1>
            <button onClick={() => setCartOpen(!isCartOpen)}>Cart ({cartItems})</button>
            <CartSidebar isOpen={isCartOpen} toggleCart={() => setCartOpen(!isCartOpen)} />
        </header>
    );
}