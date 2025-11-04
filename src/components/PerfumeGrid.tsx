import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerfumes } from "../store/perfumeSlice";
import type { RootState, AppDispatch } from "../store";

const PerfumeGrid = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredPerfumes: perfumes, status } = useSelector((state: RootState) => state.perfumes);

    useEffect(() => {
        dispatch(fetchPerfumes());
    }, [dispatch]);

    if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
    if (status === "failed") return <p className="text-center mt-10 text-red-500">Failed to load perfumes.</p>;
    return <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {perfumes.map(perfume => (
            <div key={perfume.id} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-red-300">
                <img src={perfume.image} alt={perfume.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{perfume.name}</h3>
                    <p className="text-sm text-gray-500">{perfume.brand}</p>
                    <p className="mt-2 font-medium">{perfume.price}€</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {perfume.scentNotes.map(note => (
                            <span key={note} className="px-2 py-0.5 text-xs bg-gray-100 rounded-full text-gray-600">
                                {note}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>;
};

export default PerfumeGrid;