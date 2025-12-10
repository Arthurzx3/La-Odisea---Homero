"use client"

import { useState } from "react"

const characters = [
  {
    name: "Odiseo",
    title: "El héroe astuto",
    description:
      "Rey de Ítaca, famoso por su inteligencia y astucia. Protagonista de la obra, su ingenio le permite superar cada obstáculo en su viaje de regreso a casa. Es el arquetipo del héroe griego que combina fuerza física con sabiduría.",
    image: "/odysseus-greek-hero-warrior-ancient-greek-art-styl.jpg",
    role: "Protagonista",
  },
  {
    name: "Penélope",
    title: "La esposa fiel",
    description:
      "Esposa de Odiseo, símbolo de fidelidad y paciencia. Durante veinte años espera el regreso de su esposo mientras engaña a los pretendientes con su famoso telar, destejiendo de noche lo que tejía de día.",
    image: "/penelope-greek-woman-weaving-loom-ancient-greek-ar.jpg",
    role: "Esposa de Odiseo",
  },
  {
    name: "Telémaco",
    title: "El hijo valiente",
    description:
      "Hijo de Odiseo y Penélope. Al inicio de la obra es un joven inseguro que, guiado por Atenea, emprende un viaje para buscar noticias de su padre y madura hasta convertirse en un digno heredero.",
    image: "/telemachus-young-greek-prince-ancient-greek-art.jpg",
    role: "Hijo de Odiseo",
  },
  {
    name: "Atenea",
    title: "La diosa protectora",
    description:
      "Diosa de la sabiduría y la guerra estratégica. Protectora de Odiseo, interviene constantemente para ayudarle en su viaje y guía a Telémaco. Representa la astucia divina que favorece al héroe.",
    image: "/athena-greek-goddess-wisdom-helmet-owl-ancient-gre.jpg",
    role: "Aliada divina",
  },
  {
    name: "Poseidón",
    title: "El dios vengativo",
    description:
      "Dios del mar y principal antagonista divino. Su ira hacia Odiseo por cegar a su hijo Polifemo es la causa de las desgracias del héroe en el mar, provocando tormentas y naufragios.",
    image: "/poseidon-greek-god-sea-trident-ocean-ancient-greek.jpg",
    role: "Antagonista",
  },
  {
    name: "Antínoo",
    title: "El pretendiente arrogante",
    description:
      "Líder de los pretendientes que invaden el palacio de Odiseo. Representa la hybris (soberbia) griega. Es cruel, arrogante y el primero en caer ante la venganza de Odiseo a su regreso.",
    image: "/greek-nobleman-arrogant-ancient-greek-art-aristocr.jpg",
    role: "Líder de los pretendientes",
  },
]

export function CharactersSection() {
  const [activeCharacter, setActiveCharacter] = useState(0)

  return (
    <section id="personajes" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Sección III</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">PERSONAJES PRINCIPALES</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Character Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {characters.map((character, index) => (
              <button
                key={character.name}
                onClick={() => setActiveCharacter(index)}
                className={`px-6 py-3 font-sans text-sm tracking-wider transition-all ${
                  activeCharacter === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {character.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Active Character Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={characters[activeCharacter].image || "/placeholder.svg"}
                  alt={characters[activeCharacter].name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary px-4 py-2">
                <span className="font-sans text-sm text-primary-foreground">{characters[activeCharacter].role}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-4xl font-bold text-foreground mb-2">
                  {characters[activeCharacter].name}
                </h3>
                <p className="text-primary text-xl italic">{characters[activeCharacter].title}</p>
              </div>

              <div className="w-16 h-1 bg-primary/50" />

              <p className="text-foreground/80 text-lg leading-relaxed">{characters[activeCharacter].description}</p>

              <div className="flex gap-2">
                {characters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCharacter(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeCharacter === index ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
