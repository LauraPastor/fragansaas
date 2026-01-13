import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
interface FavouriteItemProps {
    brand: string;
    name: string;
    image: string;
    onClick: () => void;
}

const FavouriteItem = ({
    brand,
    name,
    image,
    onClick,
}: FavouriteItemProps) => (
    <li className="flex items-center py-4 gap-4 cursor-pointer hover:bg-gray-50 rounded-lg px-2 transition" onClick={onClick}>
        {/* Image */}
        <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-md object-cover bg-gray-100"
        />

        {/* Text */}
        <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 uppercase truncate">{brand}</p>
            <p className="text-sm truncate">{name}</p>
        </div>
        {/* Arrow */}
        <span className="ml-4 text-gray-400">›</span>
    </li>
);
interface FavouritesCardProps {
    onSeeMore: () => void;
}

const FavouritesCard: React.FC<FavouritesCardProps> = ({ onSeeMore }) => {
    const favourites = useSelector(
        (state: RootState) => state.favorites.items
    );
    const navigate = useNavigate();


    if (favourites.length === 0) {
        return (
            <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-medium mb-2">My favourites</h2>
                <p className="text-sm text-gray-500">
                    You don’t have any favourite perfumes yet.
                </p>
            </section>
        );
    }

    return (
        <section className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">My favourites</h2>
                <button className="text-xs uppercase tracking-widest hover:underline" onClick={onSeeMore}>
                    See more
                </button>
            </div>

            <ul className="divide-y">
                {favourites.slice(0, 3).map((perfume) => (
                    <FavouriteItem
                        onClick={() => navigate(`/perfume/${perfume.id}`)}
                        key={perfume.id}
                        brand={perfume.brand}
                        name={perfume.name}
                        image={perfume.image}
                    />
                ))}
            </ul>
        </section>
    );
};

export default FavouritesCard;
