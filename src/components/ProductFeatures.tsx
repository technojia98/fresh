
import { Leaf, Heart, Star, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "All Natural Ingredients",
    description: "Carefully selected herbs and spices, no artificial additives or preservatives."
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Promotes oral health while providing long-lasting fresh breath naturally."
  },
  {
    icon: Star,
    title: "Traditional Recipe",
    description: "Time-tested family recipes passed down through generations."
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Handcrafted in small batches to ensure consistent quality and freshness."
  }
];

const ProductFeatures = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-50 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-green-50 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-emerald-600">
            Why Choose Our Mouth Freshener?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-800">
            Experience the difference of authentic, handmade quality with ingredients you can trust.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-emerald-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-emerald-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
