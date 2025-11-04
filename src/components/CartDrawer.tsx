import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button onClick={onClose} className="text-gray-600 text-xl">✕</button>
            </div>

            <div className="p-4 overflow-y-auto h-[calc(100%-140px)]">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center mt-10">Cart is empty</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1 ml-3">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">${item.price}</p>
                                <div className="flex items-center mt-1">
                                    <button
                                        className="px-2 bg-gray-200 rounded"
                                        onClick={() =>
                                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                                        }
                                    >-</button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button
                                        className="px-2 bg-gray-200 rounded"
                                        onClick={() =>
                                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                                        }
                                    >+</button>
                                </div>
                            </div>
                            <button
                                className="text-red-500 ml-2"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                ✕
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 border-t flex flex-col gap-2">
                <div className="flex justify-between">
                    <span className="font-medium">Total:</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <button
                    className="bg-black text-white py-2 rounded hover:bg-gray-800"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default CartDrawer;
