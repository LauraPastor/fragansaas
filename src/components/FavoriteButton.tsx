import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import { openLoginModal } from "../features/auth/authSlice";
import type { FavoriteItem } from "../features/favorites/favoritesSlice";
import type { RootState } from "../store";

interface Props {
    item: FavoriteItem;
}

const FavoriteButton = ({ item }: Props) => {
    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.items.some((fav) => fav.id === item.id)
    );

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!isAuthenticated) {
            dispatch(openLoginModal());
            return;
        }

        dispatch(toggleFavorite(item));
    };

    return (
        <div className="p-2 rounded-full bg-white/80">
            <button
                onClick={handleClick}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Toggle favourite"
            >
                <Heart
                    size={18}
                    className={
                        isFavorite
                            ? "fill-red-500 stroke-red-500"
                            : "stroke-gray-400"
                    }
                />
            </button>
        </div>
    );
};

export default FavoriteButton;