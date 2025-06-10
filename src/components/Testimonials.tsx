
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best mouth freshener I've ever tried! It's completely natural and the effect lasts all day. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    text: "Love the traditional taste and knowing it's made with natural ingredients. My whole family uses it now.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    text: "Fresh, effective, and homemade - what more could you want? The quality is consistently excellent.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-100 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-emerald-600">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 transition-colors duration-300 hover:text-gray-800">
            Join hundreds of satisfied customers who love our natural mouth fresheners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-yellow-400 fill-current transition-transform duration-300 hover:scale-125 group-hover:animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic transition-colors duration-300 group-hover:text-gray-900 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
