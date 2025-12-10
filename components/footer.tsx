import { Anchor } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Anchor className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-sans text-xl font-bold text-foreground mb-2">LA ODISEA</h3>
          <p className="text-muted-foreground text-sm mb-6">Una obra de Homero · Siglo VIII a.C.</p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#inicio" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#autor" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Autor
            </a>
            <a href="#personajes" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Personajes
            </a>
            <a href="#cantos" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Cantos
            </a>
            <a href="#galeria" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Galería
            </a>
          </div>

          <div className="w-full h-px bg-border mb-6" />

          <p className="text-muted-foreground text-xs text-center">
            Proyecto educativo sobre literatura clásica griega.
            <br />
            "Cuéntame, Musa, del hombre de muchos senderos..."
          </p>
        </div>
      </div>
    </footer>
  )
}
