import { useRef, useEffect, useState } from 'react';
import { ShoppingCart, User, Search } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import FilterBar from "./FilterBar";
import LogIn from "./LogIn";
import CartDrawer from "./CartDrawer";

const FloatingButtons = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);



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
        isLoggedIn &&
        dialogRef.current &&
        !dialogRef.current.contains(target)
      ) {
        setIsLoggedIn(false);
      }

      if (
        isCartOpen &&
        cartRef.current &&
        !cartRef.current.contains(target)
      ) {
        const element = target as HTMLElement;
        if (element.closest('[data-cart-action="add"]')) {
          return;
        }
        setIsCartOpen(false);
      }
    };

    if (isSearchOpen || isCartOpen || isLoggedIn) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, isCartOpen, isLoggedIn]);

  return (
    <>
      <div className='fixed top-4 right-4 flex gap-3 z-40'>
        <button
          className='p-3 rounded-full hover:bg-gray-100'
          onClick={() => setIsSearchOpen(true)}
          title='Search'>
          <Search size={20} />
        </button>
        <button
          onClick={() => setIsLoggedIn(true)}
          className='p-3 rounded-full hover:bg-gray-100'
          title='User Profile'>
          <User size={20} />
        </button>
        <button
          className='relative p-3 rounded-full hover:bg-gray-100'
          onClick={() => setIsCartOpen(true)}
          title='Shopping Cart'>
          <ShoppingCart size={20} />

          {totalItems > 0 && (
            <span
              className='absolute -top-1 -right-1 bg-gray-700 text-white text-xs font-medium min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full'>
              {totalItems}
            </span>
          )}
        </button>
      </div>
      <FilterBar isOpen={isSearchOpen} ref={searchRef} />
      <LogIn isOpen={isLoggedIn} onClose={() => setIsLoggedIn(false)} ref={dialogRef} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} ref={cartRef} />
    </>
  );
};

export default FloatingButtons;
