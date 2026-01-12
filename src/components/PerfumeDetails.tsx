import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { addToCart } from "../store/cartSlice";
import { fetchPerfumes } from "../store/perfumeSlice";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import FavoriteButton from "../components/FavoriteButton";

const PerfumeDetails = () => {
    const { id } = useParams<{ id: string }>();
    const perfumeId = Number(id);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const perfumes = useSelector((state: RootState) => state.perfumes.perfumes);
    const status = useSelector((state: RootState) => state.perfumes.status);

    useEffect(() => {
        if (perfumes.length === 0) {
            dispatch(fetchPerfumes());
        }
    }, [dispatch, perfumes.length]);


    const perfume = useSelector((state: RootState) =>
        state.perfumes.perfumes.find(p => p.id === perfumeId)
    );
    if (status === "loading") {
        return <p className="p-8 text-center">Loading perfume…</p>;
    }
    if (!perfume) {
        return <div className="relative p-8 max-w-6xl mx-auto">
            {/* Floating back arrow */}
            <button
                onClick={() => navigate(-1)}
                className="
          fixed top-24 left-48
          p-2 rounded-full
          bg-gray-300 shadow-md
          hover:bg-gray-200
          cursor-pointer
          transition
          z-10
        "
                title="Go back"
            >
                <ArrowLeft size={20} />
            </button>
            <p className="p-8">Perfume not found</p>
        </div>
    }

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
          cursor-pointer
          transition
          z-10
        "
                title="Go back"
            >
                <ArrowLeft size={20} />
            </button>

            {/* Perfume name */}
            {/* Brand */}
            <p className="text-center text-xs tracking-widest text-gray-500 mb-2 uppercase">
                {perfume.brand}
            </p>

            {/* Title */}
            <h1
                className="
      text-center
      text-4xl md:text-5xl
      font-[Playfair Display]
      font-medium
      tracking-wide
      mb-16
    "
            >
                {perfume.name.toUpperCase()}
            </h1>
            <div
                className="absolute top-3 right-3 z-10"
                onClick={(e) => e.stopPropagation()}
            >
                <FavoriteButton
                    item={{
                        id: perfume.id.toString(),
                        name: perfume.name,
                        brand: perfume.brand,
                        image: perfume.image,
                    }}
                />
            </div>


            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left: image */}
                <div>
                    <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="w-full rounded-2xl shadow-lg"
                    />
                </div>

                {/* Right: info */}
                <div className="space-y-10">
                    {/* Notes */}
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                            Scent Notes
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {perfume.notes.map(note => (
                                <span
                                    key={note}
                                    className="
                px-3 py-1
                text-xs
                rounded-full
                bg-gray-100
                text-gray-600
              "
                                >
                                    {note}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                            Price
                        </p>
                        <p className="text-2xl font-medium">
                            {perfume.price} €
                        </p>
                    </div>


                    {/* Divider */}
                    <div className="h-px bg-gray-200" />

                    {/* CTA */}
                    <button
                        data-cart-action="add"
                        onClick={() => dispatch(addToCart(perfume))}
                        className="
          w-full
          bg-black
          text-white
          py-4
          text-sm
          tracking-widest
          uppercase
          hover:bg-gray-900
          transition
        "
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PerfumeDetails;
