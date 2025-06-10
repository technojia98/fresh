
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Mouth Freshener?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of authentic, handmade quality with ingredients you can trust.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
