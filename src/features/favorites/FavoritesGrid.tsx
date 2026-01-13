import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { addToCart } from "../../features/cart/cartSlice";
import { Heart } from "lucide-react";

const FavoritesGrid = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const favorites = useSelector(
        (state: RootState) => state.favorites.items
    );

    if (favorites.length === 0) {
        return (
            <p className="text-gray-500 text-sm">
                You haven’t added any favourites yet.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((perfume) => (
                <div
                    key={perfume.id}
                    className="
            relative
            bg-white
            rounded-2xl
            shadow-md
            overflow-hidden
            transform transition
            hover:-translate-y-1
            hover:shadow-xl
          "
                >
                    {/* IMAGE */}
                    <div className="relative">
                        <img
                            src={perfume.image}
                            alt={perfume.name}
                            onClick={() => navigate(`/perfume/${perfume.id}`)}
                            className="h-56 w-full object-cover cursor-pointer"
                        />

                        {/* FAVORITE ICON (always filled here) */}
                        <button
                            title="favorite-icon"
                            className="
                absolute top-3 right-3
                p-2 rounded-full
                bg-white/90
                shadow
              "
                        >
                            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        </button>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{perfume.name}</h3>
                        <p className="text-sm text-gray-500">{perfume.brand}</p>
                        <p className="mt-2 font-medium">{perfume.price}€</p>

                        <button
                            data-cart-action="add"
                            onClick={() => dispatch(addToCart(perfume))}
                            className="
                mt-3
                bg-black
                text-white
                px-4 py-2
                rounded-lg
                text-sm
                hover:bg-gray-900
                transition
              "
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FavoritesGrid;
