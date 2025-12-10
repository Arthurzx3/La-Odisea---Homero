// ================================
// Navigation
// ================================
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("navToggle")
const navLinks = document.getElementById("navLinks")

// Handle scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navLinks.classList.toggle("mobile-open")
})

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navLinks.classList.remove("mobile-open")
  })
})

// ================================
// ================================
let characters = []
let cantos = []
let galleryImages = []

async function loadData() {
  try {
    const response = await fetch("data.json")
    const data = await response.json()
    characters = data.characters
    cantos = data.cantos
    galleryImages = data.gallery

    initCharacters()
    initCantos()
    initGallery()
  } catch (error) {
    console.error("Error loading data:", error)
    // Fallback: use embedded data if JSON fails to load
    initWithFallbackData()
  }
}

function initWithFallbackData() {
  characters = [
    {
      name: "Odiseo",
      title: "El héroe astuto",
      description: "Rey de Ítaca, famoso por su inteligencia y astucia.",
      image: "/odysseus-greek-hero.jpg",
      role: "Protagonista",
    },
    {
      name: "Penélope",
      title: "La esposa fiel",
      description: "Esposa de Odiseo, símbolo de fidelidad y paciencia.",
      image: "/penelope-greek-woman.jpg",
      role: "Esposa de Odiseo",
    },
    {
      name: "Telémaco",
      title: "El hijo valiente",
      description: "Hijo de Odiseo y Penélope.",
      image: "/telemachus-greek-prince.jpg",
      role: "Hijo de Odiseo",
    },
    {
      name: "Atenea",
      title: "La diosa protectora",
      description: "Diosa de la sabiduría.",
      image: "/athena-greek-goddess.jpg",
      role: "Aliada divina",
    },
    {
      name: "Poseidón",
      title: "El dios vengativo",
      description: "Dios del mar.",
      image: "/poseidon-greek-god.jpg",
      role: "Antagonista",
    },
    {
      name: "Antínoo",
      title: "El pretendiente arrogante",
      description: "Líder de los pretendientes.",
      image: "/greek-nobleman.jpg",
      role: "Líder de los pretendientes",
    },
  ]

  cantos = [
    { number: "I", title: "Concilio de los dioses", summary: "Los dioses deciden el destino de Odiseo." },
    { number: "II", title: "Asamblea de Ítaca", summary: "Telémaco convoca una asamblea." },
  ]

  galleryImages = [{ title: "Polifemo", description: "El cíclope gigante.", image: "/cyclops.jpg" }]

  initCharacters()
  initCantos()
  initGallery()
}

// ================================
// Characters Section
// ================================
let activeCharacter = 0
const characterTabs = document.getElementById("characterTabs")
const characterImage = document.getElementById("characterImage")
const characterName = document.getElementById("characterName")
const characterTitle = document.getElementById("characterTitle")
const characterDescription = document.getElementById("characterDescription")
const characterRole = document.getElementById("characterRole")
const characterDots = document.getElementById("characterDots")

function initCharacters() {
  // Create dots
  characterDots.innerHTML = ""
  characters.forEach((_, index) => {
    const dot = document.createElement("button")
    dot.className = `character-dot ${index === 0 ? "active" : ""}`
    dot.addEventListener("click", () => setActiveCharacter(index))
    characterDots.appendChild(dot)
  })

  // Set initial character
  setActiveCharacter(0)

  // Tab click handlers
  characterTabs.querySelectorAll(".character-tab").forEach((tab, index) => {
    tab.addEventListener("click", () => setActiveCharacter(index))
  })
}

function setActiveCharacter(index) {
  if (characters.length === 0) return

  activeCharacter = index
  const character = characters[index]

  // Update content
  characterImage.src = character.image
  characterImage.alt = character.name
  characterName.textContent = character.name
  characterTitle.textContent = character.title
  characterDescription.textContent = character.description
  characterRole.textContent = character.role

  // Update tabs
  characterTabs.querySelectorAll(".character-tab").forEach((tab, i) => {
    tab.classList.toggle("active", i === index)
  })

  // Update dots
  characterDots.querySelectorAll(".character-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index)
  })
}

// ================================
// Cantos Section
// ================================
const cantosGrid = document.getElementById("cantosGrid")

function initCantos() {
  cantosGrid.innerHTML = ""

  cantos.forEach((canto) => {
    const card = document.createElement("div")
    card.className = "canto-card"
    card.innerHTML = `
      <button class="canto-header">
        <div class="canto-title">
          <span class="canto-number">${canto.number}</span>
          <span class="canto-name">${canto.title}</span>
        </div>
        <svg class="canto-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      <div class="canto-content">
        <div class="canto-content-divider"></div>
        <p>${canto.summary}</p>
      </div>
    `

    card.querySelector(".canto-header").addEventListener("click", () => {
      card.classList.toggle("expanded")
    })

    cantosGrid.appendChild(card)
  })
}

// ================================
// Gallery Section
// ================================
const galleryGrid = document.getElementById("galleryGrid")
const lightbox = document.getElementById("lightbox")
const lightboxImage = document.getElementById("lightboxImage")
const lightboxTitle = document.getElementById("lightboxTitle")
const lightboxDescription = document.getElementById("lightboxDescription")
const lightboxClose = document.getElementById("lightboxClose")

function initGallery() {
  galleryGrid.innerHTML = ""

  galleryImages.forEach((item) => {
    const galleryItem = document.createElement("div")
    galleryItem.className = "gallery-item"
    galleryItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="gallery-overlay"></div>
      <div class="gallery-title">
        <h3>${item.title}</h3>
      </div>
    `

    galleryItem.addEventListener("click", () => {
      lightboxImage.src = item.image
      lightboxImage.alt = item.title
      lightboxTitle.textContent = item.title
      lightboxDescription.textContent = item.description
      lightbox.classList.add("open")
      document.body.style.overflow = "hidden"
    })

    galleryGrid.appendChild(galleryItem)
  })
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove("open")
  document.body.style.overflow = ""
}

lightboxClose.addEventListener("click", closeLightbox)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox()
  }
})

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox()
  }
})

// ================================
// Smooth scroll for anchor links
// ================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ================================
// Initialize on page load
// ================================
document.addEventListener("DOMContentLoaded", loadData)
