const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Crafted with Love, 
              <span className="text-primary block mt-2 transition-all duration-300 hover:scale-105 cursor-pointer">Made for You</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our journey began in my grandmother's kitchen, where she taught me the art of 
                creating natural mouth fresheners using traditional methods and carefully 
                selected ingredients.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Each batch is made with the same care and attention to detail, ensuring 
                that every piece delivers the perfect balance of flavor and freshness. 
                We believe in the power of natural ingredients to provide effective, 
                long-lasting results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">🌿</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-primary">Fresh Daily</h4>
                <p className="text-gray-600 dark:text-gray-300">Made fresh every day to ensure maximum potency and flavor.</p>
              </div>
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">🏡</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-secondary">Local Sourcing</h4>
                <p className="text-gray-600 dark:text-gray-300">Ingredients sourced from trusted local suppliers.</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6 opacity-20 transition-all duration-500 group-hover:rotate-12 group-hover:opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=500&fit=crop" 
                alt="Making mouth freshener" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-bounce-in" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Handcrafted with Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
