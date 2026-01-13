import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerfumes } from "./perfumeSlice";
import type { RootState, AppDispatch } from "../../store";
import { addToCart } from "../../features/cart/cartSlice";
import FavoriteButton from "../../components/FavoriteButton";


const PerfumeGrid = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();
    const { filteredPerfumes: perfumes, status } = useSelector((state: RootState) => state.perfumes);
    const ITEMS_PER_PAGE = 16;


    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const visiblePerfumes = perfumes.slice(0, visibleCount);
    const hasMore = visibleCount < perfumes.length;
    const isExpanded = visibleCount >= perfumes.length;
    useEffect(() => {
        dispatch(fetchPerfumes());
    }, [dispatch]);

    if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
    if (status === "failed") return <p className="text-center mt-10 text-red-500">Failed to load perfumes.</p>;
    return <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visiblePerfumes.map((perfume) => (
            <div key={perfume.id} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-red-300">
                <div
                    className="relative h-56 w-full"
                    onClick={() => navigate(`/perfume/${perfume.id}`)}
                >
                    <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="h-full w-full object-cover"
                    />

                    {/* Favorite button */}
                    <div
                        className="absolute top-3 right-3 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FavoriteButton
                            item={{
                                id: perfume.id,
                                name: perfume.name,
                                brand: perfume.brand,
                                image: perfume.image,
                                price: perfume.price,
                                notes: perfume.notes,
                            }}
                        />
                    </div>
                </div>

                <div className="p-4 cursor-default">
                    <h3 className="text-lg font-semibold">{perfume.name}</h3>
                    <p className="text-sm text-gray-500">{perfume.brand}</p>
                    <p className="mt-2 font-medium">{perfume.price}€</p>
                    <button
                        data-cart-action="add"
                        onClick={() => dispatch(addToCart(perfume))}
                        className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Add to Cart
                    </button>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {perfume.notes.map(note => (
                            <span key={note} className="px-2 py-0.5 text-xs bg-gray-100 rounded-full text-gray-600">
                                {note}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
        <div className="col-span-full flex justify-center mt-8 gap-4">
            {hasMore && (
                <button
                    onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)}
                    className="px-6 py-2 border rounded-md text-sm hover:bg-gray-100 transition"
                >
                    Load more
                </button>
            )}

            {isExpanded && perfumes.length > ITEMS_PER_PAGE && (
                <button
                    onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
                    className="px-6 py-2 border rounded-md text-sm hover:bg-gray-100 transition"
                >
                    Show less
                </button>
            )}
        </div>

    </div>;

};

export default PerfumeGrid;