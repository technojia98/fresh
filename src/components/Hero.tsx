import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen flex items-center overflow-hidden pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-black/10 dark:bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-black/10 dark:bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-black/10 dark:bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
           
            <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Fresh Breath,
              </span>
              <span className="text-black dark:text-white block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Naturally Made
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Experience the perfect blend of traditional recipes and modern wellness with our handcrafted mouth fresheners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                onClick={() => navigate('/products')}
              >
                <ShoppingCart className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-black dark:border-white text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="text-center group cursor-pointer p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300">
                <div className="text-3xl font-bold text-black dark:text-white transition-all duration-300 group-hover:scale-110">100%</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">Natural</div>
              </div>
              <div className="text-center group cursor-pointer p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300">
                <div className="text-3xl font-bold text-black dark:text-white transition-all duration-300 group-hover:scale-110">500+</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">Happy Customers</div>
              </div>
              <div className="text-center group cursor-pointer p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300">
                <div className="text-3xl font-bold text-black dark:text-white transition-all duration-300 group-hover:scale-110">24h</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">Fresh Effect</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10 bg-white dark:bg-black rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 group">
              <img 
                src="/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png" 
                alt="Natural mouth freshener ingredients and spices" 
                className="w-full h-96 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-black rounded-2xl shadow-xl p-4 animate-bounce-in" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                  <span className="text-sm font-medium text-black dark:text-white">Premium Quality</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-gray-800/20 dark:from-white/20 dark:to-gray-200/20 rounded-3xl transform rotate-6 opacity-20 transition-all duration-500 hover:rotate-12 hover:opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;