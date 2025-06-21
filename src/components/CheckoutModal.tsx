import React, { useState } from 'react';
import { X, Package, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you can implement your own order processing logic
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase.",
      });
      clearCart();
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  const steps = [
    { number: 1, title: "Shipping", icon: Package },
    { number: 2, title: "Confirmation", icon: CheckCircle2 },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose} 
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl transform transition-all duration-500 animate-fade-in-up">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
          
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Order Summary</h3>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Package className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-semibold text-black">₹{(parseFloat(item.price.replace('Rs.', '')) * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-gray-900">Total Amount:</span>
                      <span className="text-black">₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Form */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Shipping Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input 
                        type="text" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                        placeholder="123 Street Name"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input 
                          type="text" 
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                          placeholder="City"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                        <input 
                          type="text" 
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                          placeholder="12345"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                      >
                        Place Order
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
