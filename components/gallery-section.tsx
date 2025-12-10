"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    title: "Polifemo",
    description: "El cíclope gigante, hijo de Poseidón, que Odiseo ciega para escapar de su cueva.",
    image: "/polyphemus-cyclops-giant-greek-mythology-cave-odys.jpg",
  },
  {
    title: "Circe",
    description: "La hechicera que convirtió a los compañeros de Odiseo en cerdos y lo retuvo un año.",
    image: "/circe-greek-sorceress-witch-magic-potion-pigs-clas.jpg",
  },
  {
    title: "Las Sirenas",
    description: "Criaturas mitad mujer mitad ave cuyo canto mortal Odiseo escuchó atado al mástil.",
    image: "/sirens-greek-mythology-singing-ship-sailors-rocks-.jpg",
  },
  {
    title: "Escila y Caribdis",
    description: "El monstruo de seis cabezas y el remolino mortal entre los que Odiseo debió navegar.",
    image: "/scylla-charybdis-sea-monsters-greek-mythology-ship.jpg",
  },
  {
    title: "Odiseo con el arco",
    description: "El momento en que Odiseo tensa su arco y revela su identidad a los pretendientes.",
    image: "/odysseus-bow-arrow-contest-suitors-greek-mythology.jpg",
  },
  {
    title: "Penélope tejiendo",
    description: "La astuta Penélope tejiendo de día y destejiendo de noche para engañar a los pretendientes.",
    image: "/penelope-weaving-loom-greek-mythology-faithful-wif.jpg",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Sección VI</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">GALERÍA DE ESCENAS</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Las escenas más emblemáticas de La Odisea, inmortalizadas a través de los siglos en el arte occidental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((item, index) => (
            <div key={item.title} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="font-sans text-lg font-bold text-foreground">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-foreground hover:text-primary"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[selectedImage].image || "/placeholder.svg"}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="mt-6 text-center">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-foreground/70">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
