import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sunil Shah",
    role: "Regular Customer",
    text: "The best mouth freshener I've ever tried! It's completely natural and the effect lasts all day. Highly recommended!",
    rating: 5,
    color: "primary"
  },
  {
    name: "Imran Shaikh",
    role: "Family User",
    text: "Love the traditional taste and knowing it's made with natural ingredients. My whole family uses it now.",
    rating: 5,
    color: "secondary"
  },
  {
    name: "Pascol Fernandez",
    role: "Health Enthusiast",
    text: "Fresh, effective, and homemade - what more could you want? The quality is consistently excellent.",
    rating: 5,
    color: "accent"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who love our natural mouth fresheners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-${testimonial.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <Quote className={`h-6 w-6 text-${testimonial.color}`} />
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
