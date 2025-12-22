import { Truck, Coffee, Flame, Package } from "lucide-react";

const steps = [
  {
    icon: Truck,
    step: "01",
    title: "Selección",
    description: "Viajamos a las fincas para seleccionar personalmente los mejores granos verdes."
  },
  {
    icon: Flame,
    step: "02",
    title: "Tueste",
    description: "Cada lote es tostado artesanalmente en nuestro tostador Probat de 1975."
  },
  {
    icon: Coffee,
    step: "03",
    title: "Catación",
    description: "Probamos cada lote para asegurar los más altos estándares de calidad."
  },
  {
    icon: Package,
    step: "04",
    title: "Empaque",
    description: "Empacamos en bolsas con válvula desgasificadora para máxima frescura."
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nuestro Proceso
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
            Del Grano a Tu Taza
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso meticuloso que respeta la tradición mientras aprovecha 
            las técnicas más modernas de tueste.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-all duration-300">
                {/* Step Number */}
                <span className="absolute -top-4 -right-4 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </span>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
