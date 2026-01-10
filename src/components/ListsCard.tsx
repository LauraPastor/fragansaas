const ListsCard = () => (
    <section className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">My lists</h2>
            <button className="text-xs uppercase tracking-widest">
                See all
            </button>
        </div>

        <div className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
            <div>
                <p className="text-sm">Wishlist to try</p>
                <p className="text-xs text-gray-500">0 perfumes</p>
            </div>
            <span className="text-gray-400">›</span>
        </div>
    </section>
);

export default ListsCard