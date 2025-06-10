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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium <span className="text-emerald-600">Mukhwas Collection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted mouth fresheners made with the finest natural ingredients. 
              Each blend offers a unique taste and lasting freshness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    Fresh
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">{product.name}</CardTitle>
                    <div className="flex items-center">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {product.price}
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Blends Available
              </h3>
              <p className="text-gray-600 mb-6">
                Looking for something specific? We can create custom mukhwas blends 
                tailored to your taste preferences and dietary requirements.
              </p>
              <Button 
                variant="outline" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
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
