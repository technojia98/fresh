
import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import CartSidebar from "@/components/CartSidebar";
import CheckoutModal from "@/components/CheckoutModal";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Classic Fennel Mix",
    description: "Traditional blend of fennel seeds, cardamom, and rose petals for instant freshness",
    price: "$12.99",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    rating: 5,
    features: ["100% Natural", "No Preservatives", "Traditional Recipe"]
  },
  {
    id: 2,
    name: "Mint & Cardamom Delight",
    description: "Refreshing combination of dried mint leaves and aromatic cardamom pods",
    price: "$14.99",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    rating: 5,
    features: ["Extra Fresh", "Long Lasting", "Premium Quality"]
  },
  {
    id: 3,
    name: "Sweet Coconut Mukhwas",
    description: "Delicious mix with coconut flakes, fennel, and a hint of jaggery sweetness",
    price: "$13.99",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    rating: 4,
    features: ["Naturally Sweet", "Energy Boost", "Kid Friendly"]
  },
  {
    id: 4,
    name: "Spicy Ajwain Special",
    description: "Bold flavor with ajwain seeds, black pepper, and traditional spices",
    price: "$11.99",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    rating: 5,
    features: ["Digestive Aid", "Strong Flavor", "Health Benefits"]
  },
  {
    id: 5,
    name: "Rose Petal Premium",
    description: "Luxurious blend with dried rose petals, fennel, and cardamom for a floral touch",
    price: "$16.99",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    rating: 5,
    features: ["Floral Aroma", "Premium Blend", "Special Occasion"]
  },
  {
    id: 6,
    name: "Digestive Blend",
    description: "Specially crafted with cumin, coriander, and fennel for optimal digestion",
    price: "$13.49",
    image: "/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png",
    rating: 4,
    features: ["Digestive Health", "After Meals", "Ayurvedic Formula"]
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
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-emerald-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header onCartClick={() => setIsCartOpen(true)} />
      <main className="pt-24 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-emerald-600">
              Our Premium <span className="text-emerald-600 transition-colors duration-300 hover:text-emerald-700">Mukhwas Collection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-800">
              Handcrafted mouth fresheners made with the finest natural ingredients. 
              Each blend offers a unique taste and lasting freshness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white transform hover:scale-105 hover:-translate-y-2 group animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded-full text-sm font-semibold transition-all duration-300 group-hover:bg-emerald-700 group-hover:scale-110 animate-pulse">
                    Fresh
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="transition-all duration-300 group-hover:bg-emerald-50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">{product.name}</CardTitle>
                    <div className="flex items-center">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 text-yellow-400 fill-current transition-transform duration-300 hover:scale-125" 
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="transition-all duration-300 group-hover:bg-emerald-50">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-emerald-200 hover:scale-105 cursor-pointer"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 transition-all duration-300 group-hover:text-emerald-700 group-hover:scale-105">
                      {product.price}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="transition-all duration-300 group-hover:bg-emerald-50">
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/button"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/button:rotate-12" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105 border-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-emerald-600">
                Custom Blends Available
              </h3>
              <p className="text-gray-600 mb-6 transition-colors duration-300 hover:text-gray-800">
                Looking for something specific? We can create custom mukhwas blends 
                tailored to your taste preferences and dietary requirements.
              </p>
              <Button 
                variant="outline" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact for Custom Orders
              </Button>
            </div>
          </div>
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
