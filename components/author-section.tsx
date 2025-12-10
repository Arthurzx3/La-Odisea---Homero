import { BookOpen, MapPin, Calendar, Scroll } from "lucide-react"

export function AuthorSection() {
  return (
    <section id="autor" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Sección I</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">AUTOR Y CONTEXTO</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Author Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img src="/homer-ancient-greek-poet-bust-sculpture-classical-.jpg" alt="Busto de Homero" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-8 border-primary/20 m-4" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 hidden md:block">
              <p className="font-sans text-primary-foreground text-sm">Siglo VIII a.C.</p>
            </div>
          </div>

          {/* Author Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-2xl font-bold text-primary mb-4">¿Quién fue Homero?</h3>
              <p className="text-foreground/80 leading-relaxed">
                Homero es considerado el padre de la literatura occidental y el autor de las dos grandes epopeyas
                griegas: <em>La Ilíada</em> y <em>La Odisea</em>. Aunque su existencia histórica es debatida, la
                tradición lo describe como un poeta ciego que vivió en la antigua Grecia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-sm">
                  <Scroll className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">¿Qué es una epopeya?</h4>
                  <p className="text-sm text-muted-foreground">
                    Poema narrativo extenso que relata hazañas heroicas de interés colectivo para un pueblo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-sm">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Época</h4>
                  <p className="text-sm text-muted-foreground">
                    Compuesta aproximadamente en el siglo VIII a.C., durante el período arcaico griego.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Lugar</h4>
                  <p className="text-sm text-muted-foreground">
                    Antigua Grecia, probablemente en la costa de Jonia (actual Turquía).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-sm">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Tradición oral</h4>
                  <p className="text-sm text-muted-foreground">
                    Transmitida oralmente por generaciones antes de ser escrita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
