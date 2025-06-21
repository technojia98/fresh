import { Leaf, ShoppingCart, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
interface HeaderProps {
  onCartClick?: () => void;
}
const Header = ({
  onCartClick
}: HeaderProps) => {
  const location = useLocation();
  const {
    getTotalItems
  } = useCart();

  // Dark mode state and effect
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'));
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white dark:bg-black bg-opacity-95 backdrop-blur-md shadow-lg z-50 transition-all duration-300 rounded-full">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-black dark:bg-white p-2 rounded-full transition-all duration-300 group-hover:bg-gray-800 dark:group-hover:bg-gray-200 group-hover:scale-110 group-hover:shadow-lg">
              <Leaf className="h-6 w-6 text-white dark:text-black transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-2xl font-bold transition-colors duration-300 text-black dark:text-white">
              FreshBreath
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`relative transition-all duration-300 transform hover:scale-105 ${location.pathname === "/" ? "text-black dark:text-white font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"} after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-black dark:after:bg-white after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}>
              Home
            </Link>
            <Link to="/products" className={`relative transition-all duration-300 transform hover:scale-105 ${location.pathname === "/products" ? "text-black dark:text-white font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"} after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-black dark:after:bg-white after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}>
              Products
            </Link>
            <Link to="/#about" className="relative text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 transform hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-black dark:after:bg-white after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              About
            </Link>
            <Link to="/#contact" className="relative text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 transform hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-black dark:after:bg-white after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative transition-all duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 group rounded-full" onClick={onCartClick}>
              <ShoppingCart className="h-5 w-5 text-black dark:text-white transition-transform duration-300 group-hover:scale-110" />
              {getTotalItems() > 0 && <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>}
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle dark mode" onClick={() => setDarkMode(dm => !dm)} className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-black" />}
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;