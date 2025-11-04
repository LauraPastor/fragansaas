import { useDispatch, useSelector } from "react-redux";
import {
    setBrandFilter,
    setPriceFilter,
    setNoteFilter,
    clearFilters,
} from "../store/perfumeSlice";
import type { RootState } from "../store";

export default function FilterBar() {
    const dispatch = useDispatch();
    const { filters } = useSelector((state: RootState) => state.perfumes);

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center p-4 bg-white shadow-md mb-6">
            <select
                aria-label="Filter by brand"
                value={filters.brand}
                onChange={(e) => dispatch(setBrandFilter(e.target.value))}
                className="border rounded-lg px-3 py-2"
            >
                <option value="">All Brands</option>
                <option value="FraganSaaS Originals">FraganSaaS</option>
                <option value="Luxe Parfums">Luxe Parfums</option>
                <option value="Botanical Scents">Botanical Scents</option>
                <option value="Chanel">Chanel</option>
            </select>

            <select
                aria-label="Filter by maximum price"
                value={filters.maxPrice ?? ""}
                onChange={(e) => dispatch(setPriceFilter(e.target.value ? Number(e.target.value) : null))}
                className="border rounded-lg px-3 py-2"
            >
                <option value="">Any Price</option>
                <option value="60">Up to €60</option>
                <option value="100">Up to €100</option>
                <option value="150">Up to €150</option>
            </select>

            <input
                type="text"
                value={filters.note}
                onChange={(e) => dispatch(setNoteFilter(e.target.value))}
                placeholder="Search by note (e.g. rose)"
                className="border rounded-lg px-3 py-2 w-40"
            />

            <button
                onClick={() => dispatch(clearFilters())}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
                Clear
            </button>
        </div>
    );
}
