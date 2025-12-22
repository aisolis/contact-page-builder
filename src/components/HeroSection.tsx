import heroImage from "@/assets/hero-coffee.jpg";
import { Button } from "@/components/ui/button";
import { Coffee, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up opacity-0">
            <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-8">
              <Coffee className="w-4 h-4 text-amber" />
              <span className="text-cream text-sm font-medium">Tostadores desde 1998</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 animate-fade-up opacity-0 animation-delay-100">
            El Arte del
            <span className="block text-amber">Café Perfecto</span>
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animation-delay-200">
            Seleccionamos los mejores granos de origen único y los tostamos artesanalmente 
            para ofrecerte una experiencia sensorial incomparable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" onClick={scrollToAbout}>
              Descubre Nuestros Cafés
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contáctanos</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-cream/60 hover:text-cream transition-colors"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
