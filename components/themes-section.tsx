import { Brain, Home, Heart, Sparkles, Mountain } from "lucide-react"

const themes = [
  {
    icon: Brain,
    title: "Astucia e ingenio",
    description:
      "Odiseo es conocido como 'el de muchos ardides'. Su inteligencia, más que su fuerza, es lo que le permite superar cada obstáculo y derrotar a enemigos más poderosos.",
  },
  {
    icon: Home,
    title: "Nostos (El regreso)",
    description:
      "El tema central de la obra. El deseo profundo de regresar al hogar, a la patria y a los seres queridos impulsa toda la narrativa épica.",
  },
  {
    icon: Heart,
    title: "Lealtad y fidelidad",
    description:
      "Penélope esperando veinte años, Eumeo guardando la propiedad, el perro Argos reconociendo a su amo. La lealtad es recompensada, la traición castigada.",
  },
  {
    icon: Sparkles,
    title: "Intervención divina",
    description:
      "Los dioses griegos participan activamente en la vida de los mortales. Atenea ayuda, Poseidón castiga, Zeus arbitra. El destino humano está entrelazado con lo divino.",
  },
  {
    icon: Mountain,
    title: "Superación de obstáculos",
    description:
      "Cada aventura representa una prueba que Odiseo debe superar. El viaje es tanto físico como espiritual, una transformación del héroe a través del sufrimiento.",
  },
]

export function ThemesSection() {
  return (
    <section id="temas" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Sección V</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">TEMAS PRINCIPALES</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          {themes.map((theme, index) => (
            <div
              key={theme.title}
              className={`flex flex-col md:flex-row items-start gap-6 py-8 ${
                index !== themes.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-4 md:w-1/3">
                <div className="p-4 bg-secondary rounded-sm">
                  <theme.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-sans text-xl font-bold text-foreground">{theme.title}</h3>
              </div>
              <p className="md:w-2/3 text-foreground/80 leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
