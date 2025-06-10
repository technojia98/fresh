
import { Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

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
        </div>
      </div>
    </header>
  );
};

export default Header;
