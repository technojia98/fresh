
import { Leaf, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onCartClick?: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const location = useLocation();
  const { getTotalItems } = useCart();

  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-600 p-2 rounded-full transition-all duration-300 group-hover:bg-emerald-700 group-hover:scale-110 group-hover:shadow-lg">
              <Leaf className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
              FreshBreath
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative transition-all duration-300 transform hover:scale-105 ${
                location.pathname === "/" 
                  ? "text-emerald-600 font-semibold" 
                  : "text-gray-700 hover:text-emerald-600"
              } after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`relative transition-all duration-300 transform hover:scale-105 ${
                location.pathname === "/products" 
                  ? "text-emerald-600 font-semibold" 
                  : "text-gray-700 hover:text-emerald-600"
              } after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Products
            </Link>
            <a 
              href="#about" 
              className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Contact
            </a>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative transition-all duration-300 hover:scale-110 hover:bg-emerald-50 group"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
