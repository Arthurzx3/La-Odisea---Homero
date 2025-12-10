import { Anchor, Swords, Ship, Home, Waves } from "lucide-react"

const summaryPoints = [
  {
    icon: Swords,
    title: "La Guerra de Troya",
    description:
      "Tras diez años de guerra contra Troya, los griegos finalmente logran la victoria gracias al ingenio de Odiseo y su famoso caballo de madera.",
  },
  {
    icon: Ship,
    title: "El largo viaje",
    description:
      "Odiseo emprende el regreso a su hogar en Ítaca, pero los dioses le imponen un viaje de diez años más lleno de peligros y aventuras.",
  },
  {
    icon: Waves,
    title: "Obstáculos míticos",
    description:
      "Se enfrenta al cíclope Polifemo, la hechicera Circe, las sirenas, Escila y Caribdis, y desciende incluso al inframundo.",
  },
  {
    icon: Anchor,
    title: "Pruebas divinas",
    description:
      "La ira de Poseidón y la ayuda de Atenea marcan su destino, mientras lucha por sobrevivir y mantener a su tripulación.",
  },
  {
    icon: Home,
    title: "El regreso a Ítaca",
    description:
      "Finalmente llega a su hogar disfrazado de mendigo, recupera su trono y se reúne con su fiel esposa Penélope y su hijo Telémaco.",
  },
]

export function SummarySection() {
  return (
    <section id="resumen" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Sección II</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">RESUMEN DE LA OBRA</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed text-lg">
            La Odisea narra el épico regreso de Odiseo (Ulises en latín) a su patria Ítaca después de la Guerra de
            Troya. Durante veinte años —diez de guerra y diez de travesía— el héroe griego enfrenta pruebas
            sobrehumanas, la ira de los dioses y la nostalgia del hogar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {summaryPoints.map((point, index) => (
            <div
              key={point.title}
              className={`bg-card p-8 border border-border hover:border-primary/50 transition-colors group ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary group-hover:bg-primary/20 transition-colors rounded-sm">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-sans text-sm">0{index + 1}</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
