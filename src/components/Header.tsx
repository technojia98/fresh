
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
    <header className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">FreshBreath</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${
                location.pathname === "/" 
                  ? "text-emerald-600 font-semibold" 
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors duration-300 ${
                location.pathname === "/products" 
                  ? "text-emerald-600 font-semibold" 
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Products
            </Link>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">Contact</a>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
