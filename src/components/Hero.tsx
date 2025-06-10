
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fresh Breath,
              <span className="text-emerald-600 block">Naturally Made</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Handcrafted mouth fresheners made with premium natural ingredients. 
              Experience the perfect blend of traditional recipes and modern wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Fresh Effect</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop" 
                alt="Homemade mouth freshener" 
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                New Recipe!
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-300 rounded-3xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
