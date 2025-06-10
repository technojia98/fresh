
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50 relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 transition-colors duration-300 hover:text-emerald-600">
              Crafted with Love, 
              <span className="text-emerald-600 block transition-all duration-300 hover:scale-105 cursor-pointer">Made for You</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed transition-colors duration-300 hover:text-gray-800">
              Our journey began in my grandmother's kitchen, where she taught me the art of 
              creating natural mouth fresheners using traditional methods and carefully 
              selected ingredients.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed transition-colors duration-300 hover:text-gray-800">
              Each batch is made with the same care and attention to detail, ensuring 
              that every piece delivers the perfect balance of flavor and freshness. 
              We believe in the power of natural ingredients to provide effective, 
              long-lasting results.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-emerald-600">Fresh Daily</h4>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Made fresh every day to ensure maximum potency and flavor.</p>
              </div>
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-emerald-600">Local Sourcing</h4>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Ingredients sourced from trusted local suppliers.</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=500&fit=crop" 
                alt="Making mouth freshener" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer group">
              <div className="text-2xl font-bold text-emerald-600 transition-all duration-300 group-hover:scale-110">5+</div>
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-emerald-700">Years of Crafting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
