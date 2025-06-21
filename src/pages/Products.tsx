import { useState } from "react";
import { ShoppingCart, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import CartSidebar from "@/components/CartSidebar";
import CheckoutModal from "@/components/CheckoutModal";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic Fennel Mix",
    description: "Traditional blend of fennel seeds, cardamom, and rose petals for instant freshness",
    price: "Rs.250",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    features: ["100% Natural", "No Preservatives", "Traditional Recipe"],
    badge: "Best Seller",
    color: "primary"
  },
  {
    id: 2,
    name: "Mint & Cardamom Delight",
    description: "Refreshing combination of dried mint leaves and aromatic cardamom pods",
    price: "Rs.250",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    features: ["Extra Fresh", "Long Lasting", "Premium Quality"],
    badge: "New",
    color: "secondary"
  },
  {
    id: 3,
    name: "Sweet Coconut Mukhwas",
    description: "Delicious mix with coconut flakes, fennel, and a hint of jaggery sweetness",
    price: "Rs.250",
    image: "/images/sweet-coconut-mukhwas.jpg",
    features: ["Naturally Sweet", "Energy Boost", "Kid Friendly"],
    color: "accent"
  },
  {
    id: 4,
    name: "Spicy Ajwain Special",
    description: "Bold flavor with ajwain seeds, black pepper, and traditional spices",
    price: "Rs.250",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    features: ["Digestive Aid", "Strong Flavor", "Health Benefits"],
    color: "primary"
  },
  {
    id: 5,
    name: "Rose Petal Premium",
    description: "Luxurious blend with dried rose petals, fennel, and cardamom for a floral touch",
    price: "Rs.250",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    features: ["Floral Aroma", "Premium Blend", "Special Occasion"],
    color: "secondary"
  },
  {
    id: 6,
    name: "Digestive Blend",
    description: "Specially crafted with cumin, coriander, and fennel for optimal digestion",
    price: "Rs.250",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    features: ["Digestive Health", "After Meals", "Ayurvedic Formula"],
    color: "accent"
  }
];

const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to Cart",
      description: `${product.name}`,
      action: (
        <Button
          variant="ghost"
          size="sm"
          className="h-6 px-2 text-xs hover:bg-black/10"
          onClick={() => setIsCartOpen(true)}
        >
          View Cart
        </Button>
      ),
    });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleBuyNow = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to Cart",
      description: `${product.name}`,
      action: (
        <Button
          variant="ghost"
          size="sm"
          className="h-6 px-2 text-xs hover:bg-black/10"
          onClick={() => handleCheckout()}
        >
          Checkout
        </Button>
      ),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20"
      >
        <motion.div 
          className="absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
        </motion.div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          
          <motion.h1 
            className="text-4xl mdtext-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover Our <span className="text-black dark:text-white">Premium Mukhwas</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Handcrafted mouth fresheners made with the finest natural ingredients. Unique blends for every taste.
          </motion.p>
        </motion.div>
      </motion.div>

      <Header onCartClick={() => setIsCartOpen(true)} />
      <main className="pt-8 md:pt-0 relative z-10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-[400px] flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-36 object-cover"
                    />
                    {product.badge && (
                      <motion.div 
                        className="absolute top-2 right-2 bg-black/90 text-white px-2 py-0.5 rounded-full text-xs font-medium"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        {product.badge}
                      </motion.div>
                    )}
                  </motion.div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className={`bg-black/10 text-black dark:text-white px-1.5 py-0.5 rounded-full text-xs font-medium`}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-black dark:text-white">{product.price}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg transition-all duration-300 transform hover:shadow-lg group text-sm"
                          >
                            <ShoppingCart className="mr-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-12" />
                            Add to Cart
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => handleBuyNow(product)}
                            variant="outline"
                            className="w-full border-2 border-black text-black hover:bg-black/5 dark:border-white dark:text-white dark:hover:bg-white/5 py-2 rounded-lg transition-all duration-300 transform hover:shadow-lg group text-sm"
                          >
                            Buy Now
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Custom Orders CTA */}
          <motion.div 
            className="text-center mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div 
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl max-w-2xl mx-auto"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="relative z-10">
                <motion.div 
                  className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="inline-block mr-2 h-4 w-4" />
                  Custom Orders
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Custom Blends Available
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Looking for something specific? We can create custom mukhwas blends
                  tailored to your taste preferences and dietary requirements.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 px-8 py-6 rounded-xl transition-all duration-300 transform hover:shadow-lg group"
                  >
                    Contact for Custom Orders
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileHover={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export default Products;

