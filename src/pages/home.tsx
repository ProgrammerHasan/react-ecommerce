import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import axios from "axios";

type Product = { id: number; title: string; price: number; image: string; category: string; };

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.items);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => {
                const isInCart = cart.some((item: Product) => item.id === product.id);

                return (
                    <div key={product.id} className="border p-4">
                        <img src={product.image} alt={product.title} className="h-10 w-20 mx-auto" style={{ width: "112px" }}/>
                        <h2 className="text-lg">{product.title}</h2>
                        <p>${product.price}</p>
                        <button
                            onClick={() => dispatch(isInCart ? removeFromCart(product.id) : addToCart(product))}
                            className={`px-4 py-2 mt-2 rounded ${
                                isInCart ? "bg-red-500 text-white" : "bg-blue-500 text-white"
                            }`}
                        >
                            {isInCart ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
