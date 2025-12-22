import coffeeRoasting from "@/assets/coffee-roasting.jpg";
import { Leaf, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Orgánico",
      description: "Trabajamos exclusivamente con fincas certificadas que practican agricultura sostenible."
    },
    {
      icon: Award,
      title: "Tueste Artesanal",
      description: "Cada lote es tostado en pequeñas cantidades para garantizar la máxima frescura."
    },
    {
      icon: Heart,
      title: "Comercio Justo",
      description: "Pagamos precios justos a los agricultores, apoyando comunidades cafetaleras."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={coffeeRoasting} 
                alt="Proceso de tostado artesanal de café"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-card">
              <p className="font-display text-4xl text-primary">25+</p>
              <p className="text-muted-foreground text-sm">Años de experiencia</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
              Pasión por el café de especialidad
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              En Aroma Dorado, creemos que cada taza de café cuenta una historia. 
              Desde las montañas de Colombia hasta tu mesa, cuidamos cada detalle 
              del proceso para preservar los sabores únicos que la naturaleza nos regala.
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
