import pourOver from "@/assets/pour-over.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Colombia Huila",
    origin: "Huila, Colombia",
    notes: "Caramelo, Cítricos, Chocolate",
    roast: "Medio",
    image: coffeeBeans,
  },
  {
    name: "Ethiopia Yirgacheffe",
    origin: "Yirgacheffe, Etiopía",
    notes: "Floral, Frutos Rojos, Bergamota",
    roast: "Ligero",
    image: pourOver,
  },
  {
    name: "Brasil Santos",
    origin: "Minas Gerais, Brasil",
    notes: "Nuez, Miel, Cacao",
    roast: "Oscuro",
    image: coffeeBeans,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nuestra Selección
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
            Cafés de Origen Único
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada café tiene su propia personalidad. Descubre los sabores únicos 
            de nuestras selecciones premium de todo el mundo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article 
              key={index} 
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Tueste {product.roast}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-accent text-sm font-medium mb-2">{product.origin}</p>
                <h3 className="font-display text-2xl text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  <span className="font-medium">Notas:</span> {product.notes}
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
