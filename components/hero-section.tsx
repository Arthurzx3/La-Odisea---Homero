import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ancient-greek-ship-sailing-mediterranean-sea-drama.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 border border-primary/50 text-primary text-sm tracking-[0.3em] uppercase">
            Homero
          </span>
        </div>

        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-wide">
          LA ODISEA
        </h1>

        <div className="w-24 h-1 bg-primary mx-auto mb-8" />

        <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-serif italic max-w-2xl mx-auto leading-relaxed">
          "El viaje más famoso de la literatura clásica"
        </p>

        <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Una epopeya que narra el regreso de Odiseo a Ítaca tras la Guerra de Troya, enfrentando monstruos, dioses y su
          propio destino.
        </p>

        <a
          href="#autor"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-wider hover:bg-primary/90 transition-colors"
        >
          EXPLORAR LA OBRA
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#autor" className="text-primary">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/20 rotate-12 hidden lg:block" />
    </section>
  )
}
