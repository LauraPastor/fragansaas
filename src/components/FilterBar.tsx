import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setBrandFilter,
    setPriceFilter,
    setNoteFilter,
    clearFilters,
} from "../store/perfumeSlice";
import type { RootState } from "../store";

interface FilterBarProps {
    isOpen: boolean;
}

const FilterBar = forwardRef<HTMLDivElement, FilterBarProps>(
    ({ isOpen }, ref) => {
        const dispatch = useDispatch();
        const { filters } = useSelector((state: RootState) => state.perfumes);

        return (
            <div ref={ref} className={isOpen ? 'top-0 right-0 mt-20 fixed flex flex-wrap gap-2 rounded-4xl items-center justify-center p-4 bg-gray-100 shadow-md mb-6 z-50' : 'hidden'}>
                <select
                    aria-label="Filter by brand"
                    value={filters.brand}
                    onChange={(e) => dispatch(setBrandFilter(e.target.value))}
                    className="border rounded-lg px-2 py-1"
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
                    className="border rounded-lg px-2 py-1"
                >
                    <option value="">Any Price</option>
                    <option value="80">Up to €80</option>
                    <option value="100">Up to €100</option>
                    <option value="150">Up to €150</option>
                </select>

                <input
                    type="text"
                    value={filters.note}
                    onChange={(e) => dispatch(setNoteFilter(e.target.value))}
                    placeholder="Search by note (e.g. rose)"
                    className="border rounded-lg py-1"
                />

                <button
                    onClick={() => dispatch(clearFilters())}
                    className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700 transition"
                >
                    Clear
                </button>
            </div>
        );
    }
);
FilterBar.displayName = 'FilterBar';
export default FilterBar;