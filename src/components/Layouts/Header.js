import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) => {
    const baseClass = "font-label-uppercase text-label-uppercase transition-colors duration-500 ease-in-out";
    const activeClass = "text-primary border-b border-primary pb-1";
    const inactiveClass = "text-on-surface-variant hover:text-primary";
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
        {/* Brand Logo */}
        <a
          className="font-headline-md text-headline-md tracking-widest text-primary"
          href="#"
        >
          ÉLÉGANCE
        </a>
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            className={getLinkClass("/new")}
            href="/new"
          >
            New Arrivals
          </a>
          <a
            className={getLinkClass("/future")}
            href="/future"
          >
            Featured
          </a>
          <a
            className={getLinkClass("/about")}
            href="/about"
          >
            About Us
          </a>
          <a
            className={getLinkClass("/contact")}
            href="/contact"
          >
            Contact
          </a>
        </div>
        {/* Utility Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={handleSearchClick}
            className="text-primary hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined" data-icon="search">
              search
            </span>
          </button>
          <button
            onClick={handleCartClick}
            className="text-primary hover:opacity-70 transition-opacity relative"
          >
            <span
              className="material-symbols-outlined"
              data-icon="shopping_bag"
            >
              shopping_bag
            </span>
            <span className="absolute -top-1 -right-1 bg-tertiary text-[8px] text-on-tertiary w-3 h-3 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          {/* Mobile Menu Trigger */}
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined" data-icon="menu">
              menu
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
