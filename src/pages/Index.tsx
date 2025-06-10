
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/ProductFeatures";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductFeatures />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
