
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Crafted with Love, 
              <span className="text-emerald-600 block">Made for You</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey began in my grandmother's kitchen, where she taught me the art of 
              creating natural mouth fresheners using traditional methods and carefully 
              selected ingredients.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each batch is made with the same care and attention to detail, ensuring 
              that every piece delivers the perfect balance of flavor and freshness. 
              We believe in the power of natural ingredients to provide effective, 
              long-lasting results.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Fresh Daily</h4>
                <p className="text-gray-600">Made fresh every day to ensure maximum potency and flavor.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Local Sourcing</h4>
                <p className="text-gray-600">Ingredients sourced from trusted local suppliers.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=500&fit=crop" 
              alt="Making mouth freshener" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">5+</div>
              <div className="text-sm text-gray-600">Years of Crafting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
