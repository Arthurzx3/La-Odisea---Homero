import { Quote } from "lucide-react"

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Sección VII</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">CONCLUSIÓN</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary/50 p-8 md:p-12 border-l-4 border-primary">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/20" />

            <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
              <p>
                La Odisea, escrita hace casi tres milenios, sigue siendo una de las obras más influyentes de la
                literatura universal. Su relevancia trasciende el tiempo porque aborda temas universales que resuenan en
                todas las épocas: el deseo de volver a casa, la lucha contra la adversidad, la importancia de la familia
                y la búsqueda de la identidad.
              </p>

              <p>
                Odiseo encarna al héroe que no se rinde ante las dificultades. Su viaje nos enseña que el camino a casa
                —ya sea física o metafóricamente— está lleno de pruebas que nos transforman y nos hacen más sabios. La
                paciencia de Penélope y el valor de Telémaco complementan esta visión del heroísmo como un esfuerzo
                colectivo.
              </p>

              <p className="text-primary font-serif italic text-xl">
                La Odisea nos recuerda que, sin importar cuán largo sea el viaje o cuántos obstáculos enfrentemos, el
                hogar siempre vale la pena.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-secondary/30">
              <p className="font-sans text-4xl font-bold text-primary mb-2">3000+</p>
              <p className="text-muted-foreground">Años de influencia</p>
            </div>
            <div className="text-center p-6 bg-secondary/30">
              <p className="font-sans text-4xl font-bold text-primary mb-2">24</p>
              <p className="text-muted-foreground">Cantos épicos</p>
            </div>
            <div className="text-center p-6 bg-secondary/30">
              <p className="font-sans text-4xl font-bold text-primary mb-2">∞</p>
              <p className="text-muted-foreground">Lecciones de vida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
