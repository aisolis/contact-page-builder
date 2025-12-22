import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "María García",
    rating: 5,
    date: "Hace 2 semanas",
    text: "El mejor café que he probado. El aroma es increíble y el sabor es suave pero con carácter. Definitivamente mi nueva marca favorita.",
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    rating: 5,
    date: "Hace 1 mes",
    text: "Excelente atención al cliente y el café de origen etíope es espectacular. Se nota la pasión por lo que hacen.",
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    rating: 5,
    date: "Hace 1 mes",
    text: "Llevo 6 meses comprando aquí y no vuelvo a otro café. El proceso de tueste artesanal realmente hace la diferencia.",
    avatar: "AM",
  },
  {
    name: "Roberto Sánchez",
    rating: 4,
    date: "Hace 2 meses",
    text: "Muy buen café, envío rápido y bien empaquetado. El blend de la casa es mi favorito para las mañanas.",
    avatar: "RS",
  },
  {
    name: "Laura Fernández",
    rating: 5,
    date: "Hace 2 meses",
    text: "Descubrí Aroma Dorado por recomendación y no me arrepiento. Calidad premium a un precio justo.",
    avatar: "LF",
  },
  {
    name: "Diego López",
    rating: 5,
    date: "Hace 3 meses",
    text: "Como barista profesional, puedo decir que este café está a la altura de los mejores. Tueste perfecto y granos de primera.",
    avatar: "DL",
  },
];

const ReviewsSection = () => {
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-20 bg-cream-light/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-lg font-medium text-coffee-dark">Reseñas de Google</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl font-bold text-coffee-dark font-display">{averageRating}</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{reviews.length} reseñas</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border-cream hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coffee to-coffee-light flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-coffee-dark">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            ¿Ya probaste nuestro café?{" "}
            <a 
              href="#contacto" 
              className="text-coffee hover:text-coffee-dark font-medium underline underline-offset-4 transition-colors"
            >
              Cuéntanos tu experiencia
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
