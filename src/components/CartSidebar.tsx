import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';

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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose} 
      />
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
      >
        <div className="flex flex-col h-full">
          <div className="bg-black p-4 text-white relative overflow-hidden rounded-b-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Cart ({getTotalItems()})
                </h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={onClose}
                  className="text-white hover:bg-white/20 transition-all duration-300 rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 animate-fade-in">
                <div className="relative mb-4">
                  <ShoppingBag className="h-12 w-12 text-gray-300 animate-pulse" />
                  <div className="absolute -inset-3 bg-gray-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>
                <p className="text-base font-medium">Your cart is empty</p>
                <p className="text-xs mt-1 text-gray-400">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm truncate group-hover:text-black transition-colors duration-300">{item.name}</h3>
                        <p className="text-black font-semibold text-sm mt-0.5">₹{item.price.replace('Rs.', '')}</p>
                        <div className="flex items-center space-x-1.5 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full hover:bg-gray-100 transition-all duration-300 border-gray-200"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full hover:bg-gray-100 transition-all duration-300 border-gray-200"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 ml-1 text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300 rounded-full"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-100 bg-gray-50 p-4 rounded-t-3xl">
            <div className="flex justify-between items-center mb-3">
              <span className="text-base font-medium text-gray-900">Total:</span>
              <span className="text-xl font-bold text-black">
                ₹{getTotalPrice().toFixed(2)}
              </span>
            </div>
            <Button 
              className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group"
              onClick={onCheckout}
              disabled={items.length === 0}
            >
              <span className="relative z-10 flex items-center justify-center text-sm">
                Checkout
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartSidebar;
