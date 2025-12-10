import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { AuthorSection } from "@/components/author-section"
import { SummarySection } from "@/components/summary-section"
import { CharactersSection } from "@/components/characters-section"
import { CantosSection } from "@/components/cantos-section"
import { ThemesSection } from "@/components/themes-section"
import { GallerySection } from "@/components/gallery-section"
import { ConclusionSection } from "@/components/conclusion-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AuthorSection />
      <SummarySection />
      <CharactersSection />
      <CantosSection />
      <ThemesSection />
      <GallerySection />
      <ConclusionSection />
      <Footer />
    </main>
  )
}
