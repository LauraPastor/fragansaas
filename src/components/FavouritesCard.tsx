const FavouriteItem = ({
    brand,
    name,
    color,
}: {
    brand: string;
    name: string;
    color: string;
}) => (
    <li className="flex items-center py-4 gap-4 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
        <div className="w-12 h-12 bg-gray-100 rounded-md" />
        <div className="flex-1">
            <p className="text-xs text-gray-500 uppercase">{brand}</p>
            <p className="text-sm">{name}</p>
        </div>
        <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
        />
        <span className="ml-4 text-gray-400">›</span>
    </li>
);
const FavouritesCard = () => (
    <section className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">My favourites</h2>
            <button className="text-xs uppercase tracking-widest">
                See more
            </button>
        </div>

        <ul className="divide-y">
            <FavouriteItem
                brand="Versace"
                name="Versace Eros Energy"
                color="#facc15"
            />
            <FavouriteItem
                brand="Narciso Rodriguez"
                name="For Her Musc Nude"
                color="#7c2d12"
            />
            <FavouriteItem
                brand="Narciso Rodriguez"
                name="For Her Musc Noir"
                color="#f472b6"
            />
        </ul>
    </section>

);


export default FavouritesCard