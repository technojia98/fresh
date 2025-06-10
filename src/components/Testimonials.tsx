
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of satisfied customers who love our natural mouth fresheners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="font-semibold text-gray-900">
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
