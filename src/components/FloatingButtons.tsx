import { useRef, useEffect, useState } from 'react';
import { ShoppingCart, User, Search } from "lucide-react";
import CartDrawer from "./CartDrawer";
import FilterBar from "./FilterBar";

const FloatingButtons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <>
      <div className="fixed top-4 right-4 flex gap-3 z-40">
        <button className="p-3 rounded-full hover:bg-gray-100"
          onClick={() => setIsSearchOpen(true)}
          title="Search">
          <Search size={20} />
        </button>
        <button className="p-3 rounded-full hover:bg-gray-100" title="User Profile">
          <User size={20} />
        </button>
        <button className="p-3 rounded-full hover:bg-gray-100"
          onClick={() => setIsCartOpen(true)}
          title="Shopping Cart"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
      <FilterBar isOpen={isSearchOpen} ref={searchRef} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default FloatingButtons;
