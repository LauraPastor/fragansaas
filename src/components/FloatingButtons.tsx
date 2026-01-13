import { useRef, useEffect, useState } from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import type { RootState } from "../store";

import FilterBar from "../features/perfumes/FilterBar";
import LogIn from "../features/auth/LogInModal";
import CartDrawer from "../features/cart/CartDrawer";

const FloatingButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  /** Handle click outside */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(target)
      ) {
        setIsSearchOpen(false);
      }

      if (
        isLoginOpen &&
        dialogRef.current &&
        !dialogRef.current.contains(target)
      ) {
        setIsLoginOpen(false);
      }

      if (
        isCartOpen &&
        cartRef.current &&
        !cartRef.current.contains(target)
      ) {
        const element = target as HTMLElement;
        if (element.closest('[data-cart-action="add"]')) return;
        setIsCartOpen(false);
      }
    };

    if (isSearchOpen || isCartOpen || isLoginOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, isCartOpen, isLoginOpen]);

  /** USER BUTTON LOGIC */
  const handleUserClick = () => {
    if (!isAuthenticated) {
      setIsLoginOpen(true);
      return;
    }

    if (location.pathname !== "/profile") {
      navigate("/profile");
    }
  };


  return (
    <>
      <div className="fixed top-4 right-4 flex gap-3 z-40">
        {/* SEARCH */}
        <button
          className="p-3 rounded-full hover:bg-gray-100"
          onClick={() => setIsSearchOpen(true)}
          title="Search"
        >
          <Search size={20} />
        </button>

        {/* USER */}
        <button
          onClick={handleUserClick}
          className="p-3 rounded-full hover:bg-gray-100"
          title="User Profile"
        >
          <User size={20} />
        </button>

        {/* CART */}
        <button
          className="relative p-3 rounded-full hover:bg-gray-100"
          onClick={() => setIsCartOpen(true)}
          title="Shopping Cart"
        >
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-gray-700 text-white text-xs font-medium min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      <FilterBar isOpen={isSearchOpen} ref={searchRef} />
      <LogIn
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        ref={dialogRef}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        ref={cartRef}
      />
    </>
  );
};

export default FloatingButtons;