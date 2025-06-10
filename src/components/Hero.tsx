
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-emerald-100 min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Fresh Breath,
              </span>
              <span className="text-emerald-600 block animate-fade-in transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
                Naturally Made
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Handcrafted mouth fresheners made with premium natural ingredients. 
              Experience the perfect blend of traditional recipes and modern wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <ShoppingCart className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-600">100%</div>
                <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-emerald-700">Natural</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-600">500+</div>
                <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-emerald-700">Happy Customers</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-600">24h</div>
                <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-emerald-700">Fresh Effect</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 group">
              <img 
                src="/lovable-uploads/e40b23ed-c309-4e40-9193-935d8bb0adbc.png" 
                alt="Natural mouth freshener ingredients and spices" 
                className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-bounce">
                New Recipe!
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-300 rounded-3xl transform rotate-6 opacity-20 transition-all duration-500 hover:rotate-12 hover:opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
