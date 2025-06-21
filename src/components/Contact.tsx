import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 bg-gradient-to-br from-black to-gray-800 text-white relative overflow-hidden" id="contact">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full mix-blend-overlay opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full mix-blend-overlay opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105">
            Ready to Try Our Fresh Collection?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Contact us today to place your order or learn more about our natural mouth fresheners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                <Phone className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-white/80">+91 9870090991</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                <Mail className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-white/80">mohammedmak.com</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                <MapPin className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-white/80">Mumbai Central</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group" 
            onClick={() => navigate('/products')}
          >
            <span className="transition-transform duration-300 group-hover:scale-110">Order Now</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;