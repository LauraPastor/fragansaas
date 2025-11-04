import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const { items, total } = useSelector((state: RootState) => state.cart);

    if (items.length === 0)
        return <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>;

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center justify-between border-b py-3"
                    >
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.price} € each</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                placeholder="Quantity"
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                    dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                                }
                                className="border rounded-lg w-16 text-center"
                            />
                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="text-red-500 hover:text-red-700"
                            >
                                ✕
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between mt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold">{total.toFixed(2)} €</span>
            </div>
            <button
                onClick={() => dispatch(clearCart())}
                className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
                Clear Cart
            </button>
        </div>
    );
}
