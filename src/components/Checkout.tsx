import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const Checkout = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="relative p-8 max-w-6xl mx-auto">
            {/* Floating back arrow */}
            <button
                onClick={() => navigate(-1)}
                className="
          fixed top-24 left-48
          p-2 rounded-full
          bg-gray-300 shadow-md
          hover:bg-gray-200
          transition
          z-10
        "
                title="Go back"
            >
                <ArrowLeft size={20} />
            </button>

            {/* Title */}
            <h1 className="text-center text-4xl font-[Playfair Display] mb-16">
                Checkout
            </h1>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* LEFT — FORM */}
                <div className="space-y-10">
                    {/* Contact */}
                    <section>
                        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                            Contact
                        </h2>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-3 rounded"
                        />
                    </section>

                    {/* Delivery */}
                    <section>
                        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                            Delivery
                        </h2>
                        <div className="space-y-3">
                            <input className="w-full border p-3 rounded" placeholder="Address" />
                            <input className="w-full border p-3 rounded" placeholder="City" />
                            <input className="w-full border p-3 rounded" placeholder="Postal code" />
                        </div>
                    </section>

                    {/* Payment */}
                    <section>
                        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                            Payment
                        </h2>
                        <input
                            className="w-full border p-3 rounded"
                            placeholder="Card number"
                        />
                    </section>
                    {/* CTA */}
                    <button
                        className="
              w-full
              bg-black
              text-white
              py-4
              uppercase
              tracking-widest
              hover:bg-gray-900
            "
                    >
                        Place Order
                    </button>
                </div>

                {/* RIGHT — CART SUMMARY */}
                <div className="bg-gray-50 p-6 rounded-2xl space-y-6">
                    {/* Items */}
                    {cartItems.map(item => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 border-b pb-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                            />

                            <div className="flex-1">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-s text-gray-500">
                                    Qty {item.quantity}
                                </p>
                            </div>

                            <p className="font-medium">
                                {(item.price * item.quantity).toFixed(2)} €
                            </p>
                        </div>
                    ))}

                    {/* Discount */}
                    <div className="flex gap-2">
                        <input
                            placeholder="Discount code"
                            className="flex-1 border p-2 rounded"
                        />
                        <button className="border px-4 rounded hover:bg-gray-100">
                            Apply
                        </button>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between text-lg font-medium">
                        <span>Total</span>
                        <span>{subtotal.toFixed(2)} €</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
