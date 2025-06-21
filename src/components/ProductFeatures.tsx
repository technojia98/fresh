import { Leaf, Heart, Star, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "All Natural Ingredients",
    description: "Carefully selected herbs and spices, no artificial additives or preservatives.",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Promotes oral health while providing long-lasting fresh breath naturally.",
    color: "secondary"
  },
  {
    icon: Star,
    title: "Traditional Recipe",
    description: "Time-tested family recipes passed down through generations.",
    color: "accent"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Handcrafted in small batches to ensure consistent quality and freshness.",
    color: "primary"
  }
];

const ProductFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium Quality
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Why Choose Our Mouth Freshener?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Experience the difference of authentic, handmade quality with ingredients you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="relative z-10">
                <div className={`bg-${feature.color}/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className={`h-7 w-7 text-${feature.color} transition-transform duration-300 group-hover:rotate-12`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
