
import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartSidebar = ({ isOpen, onClose, onCheckout }: CartSidebarProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" 
        onClick={onClose} 
      />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-500 ease-out animate-slide-in-right">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b transition-colors duration-300 hover:bg-emerald-50">
            <h2 className="text-lg font-semibold flex items-center transition-colors duration-300 hover:text-emerald-600">
              <ShoppingBag className="mr-2 h-5 w-5 transition-transform duration-300 hover:scale-110" />
              Cart ({getTotalItems()})
            </h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="transition-all duration-300 hover:scale-110 hover:bg-emerald-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8 animate-fade-in">
                <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-gray-300 animate-pulse" />
                <p className="transition-colors duration-300 hover:text-gray-700">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:shadow-md transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded transition-transform duration-300 hover:scale-110"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm transition-colors duration-300 hover:text-emerald-600">{item.name}</h3>
                      <p className="text-emerald-600 font-semibold transition-all duration-300 hover:scale-105">{item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 transition-all duration-300 hover:scale-110 hover:bg-emerald-100"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center transition-all duration-300 hover:scale-110">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 transition-all duration-300 hover:scale-110 hover:bg-emerald-100"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-2 transition-all duration-300 hover:scale-110 hover:bg-red-100"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t p-4 bg-gradient-to-r from-emerald-50 to-green-50 transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold transition-colors duration-300 hover:text-emerald-600">Total:</span>
                <span className="text-xl font-bold text-emerald-600 transition-all duration-300 hover:scale-105">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
