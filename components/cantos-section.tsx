"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const cantos = [
  {
    number: "I",
    title: "Concilio de los dioses",
    summary: "Los dioses deciden el destino de Odiseo. Atenea visita a Telémaco disfrazada.",
  },
  {
    number: "II",
    title: "Asamblea de Ítaca",
    summary: "Telémaco convoca una asamblea y decide buscar noticias de su padre.",
  },
  {
    number: "III",
    title: "En Pilos",
    summary: "Telémaco visita a Néstor, quien le cuenta sobre la Guerra de Troya.",
  },
  {
    number: "IV",
    title: "En Esparta",
    summary: "Menelao y Helena reciben a Telémaco y le hablan de Odiseo.",
  },
  {
    number: "V",
    title: "Calipso",
    summary: "Por orden de Zeus, Calipso libera a Odiseo, quien construye una balsa.",
  },
  {
    number: "VI",
    title: "Nausícaa",
    summary: "Odiseo naufraga en Esqueria y es encontrado por la princesa Nausícaa.",
  },
  {
    number: "VII",
    title: "Palacio de Alcínoo",
    summary: "Odiseo es recibido en el palacio del rey de los feacios.",
  },
  {
    number: "VIII",
    title: "Juegos feacios",
    summary: "Odiseo participa en juegos y escucha al aedo Demódoco.",
  },
  {
    number: "IX",
    title: "Polifemo",
    summary: "Odiseo narra su encuentro con el cíclope Polifemo y cómo lo cegó.",
  },
  {
    number: "X",
    title: "Eolo y Circe",
    summary: "Aventuras con Eolo, los lestrigones y la hechicera Circe.",
  },
  {
    number: "XI",
    title: "El Hades",
    summary: "Odiseo desciende al inframundo y habla con los muertos.",
  },
  {
    number: "XII",
    title: "Sirenas, Escila y Caribdis",
    summary: "Enfrentamiento con las sirenas, Escila, Caribdis y las vacas del Sol.",
  },
  {
    number: "XIII",
    title: "Llegada a Ítaca",
    summary: "Los feacios llevan a Odiseo a Ítaca. Atenea lo disfraza de mendigo.",
  },
  {
    number: "XIV",
    title: "En casa de Eumeo",
    summary: "Odiseo es acogido por su fiel porquero Eumeo.",
  },
  {
    number: "XV",
    title: "Regreso de Telémaco",
    summary: "Telémaco regresa de Esparta y va a casa de Eumeo.",
  },
  {
    number: "XVI",
    title: "Padre e hijo",
    summary: "Odiseo revela su identidad a Telémaco. Planean la venganza.",
  },
  {
    number: "XVII",
    title: "En el palacio",
    summary: "Odiseo entra disfrazado al palacio. Su perro Argos lo reconoce.",
  },
  {
    number: "XVIII",
    title: "Los mendigos",
    summary: "Odiseo pelea con el mendigo Iro y observa a los pretendientes.",
  },
  {
    number: "XIX",
    title: "La cicatriz",
    summary: "Penélope habla con el mendigo. Euriclea reconoce a Odiseo por su cicatriz.",
  },
  {
    number: "XX",
    title: "Víspera de la venganza",
    summary: "Señales divinas anuncian la muerte de los pretendientes.",
  },
  {
    number: "XXI",
    title: "El arco",
    summary: "Penélope propone la prueba del arco. Solo Odiseo logra tensarlo.",
  },
  {
    number: "XXII",
    title: "La matanza",
    summary: "Odiseo mata a todos los pretendientes con ayuda de Telémaco.",
  },
  {
    number: "XXIII",
    title: "Penélope reconoce a Odiseo",
    summary: "Penélope pone a prueba a Odiseo y finalmente lo reconoce.",
  },
  {
    number: "XXIV",
    title: "La paz",
    summary: "Odiseo visita a su padre. Atenea establece la paz en Ítaca.",
  },
]

export function CantosSection() {
  const [expandedCanto, setExpandedCanto] = useState<number | null>(null)

  return (
    <section id="cantos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Sección IV</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">LOS 24 CANTOS</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            La Odisea está dividida en 24 cantos o raptos. Haz clic en cada uno para conocer su contenido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {cantos.map((canto, index) => (
            <div key={index} className="bg-card border border-border hover:border-primary/50 transition-all">
              <button
                onClick={() => setExpandedCanto(expandedCanto === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="font-sans text-primary text-lg font-bold">{canto.number}</span>
                  <span className="text-foreground font-medium text-sm">{canto.title}</span>
                </div>
                {expandedCanto === index ? (
                  <ChevronUp className="w-4 h-4 text-primary" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              {expandedCanto === index && (
                <div className="px-4 pb-4 pt-0">
                  <div className="h-px bg-border mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{canto.summary}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
