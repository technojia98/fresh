import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden" id="contact">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-300 rounded-full opacity-20 animate-bounce" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-300 rounded-full opacity-15 animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 transition-all duration-300 hover:scale-105">
            Ready to Try Our Fresh Collection?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto transition-colors duration-300 hover:text-white">
            Contact us today to place your order or learn more about our natural mouth fresheners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group animate-fade-in cursor-pointer" style={{
          animationDelay: '0.2s'
        }}>
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110 group-hover:shadow-lg">
              <Phone className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-emerald-200">Call Us</h3>
            <p className="text-emerald-100 transition-colors duration-300 group-hover:text-white">+91 9870090991</p>
          </div>
          
          <div className="text-center group animate-fade-in cursor-pointer" style={{
          animationDelay: '0.4s'
        }}>
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110 group-hover:shadow-lg">
              <Mail className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-emerald-200">Email Us</h3>
            <p className="text-emerald-100 transition-colors duration-300 group-hover:text-white">mohammedmak.com</p>
          </div>
          
          <div className="text-center group animate-fade-in cursor-pointer" style={{
          animationDelay: '0.6s'
        }}>
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110 group-hover:shadow-lg">
              <MapPin className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-emerald-200">Visit Us</h3>
            <p className="text-emerald-100 transition-colors duration-300 group-hover:text-white">Local Farmers Market<br />Every Saturday</p>
          </div>
        </div>
        
        <div className="text-center animate-fade-in" style={{
        animationDelay: '0.8s'
      }}>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <span className="transition-transform duration-300 group-hover:scale-110">Order Now</span>
          </Button>
        </div>
      </div>
    </section>;
};
export default Contact;