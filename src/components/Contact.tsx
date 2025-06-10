
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Try Our Fresh Collection?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Contact us today to place your order or learn more about our natural mouth fresheners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-emerald-100">+1 (555) 123-4567</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-emerald-100">hello@freshbreath.com</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-emerald-100">Local Farmers Market<br />Every Saturday</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
