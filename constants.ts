import { NavItem, CollectionItem, ServiceStep } from './types';

export const BRAND_NAME = "Sweety Lab";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Collezioni", path: "/collezioni" },
  { label: "Su Misura", path: "/su-misura" },
  { label: "Upcycling", path: "/upcycling" },
  { label: "Chi Siamo", path: "/chi-siamo" },
  { label: "Contatti", path: "/contatti" },
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "c1",
    title: "Ethereal Bloom",
    season: "Primavera/Estate 2024",
    description: "Una collezione ispirata alla rinascita della natura. Tessuti leggeri come organza e seta incontrano tagli strutturati.",
    details: "Seta pura, Lino biologico, Organza riciclata.",
    image: "https://picsum.photos/seed/fashion1/800/1000",
    gallery: [
      "https://picsum.photos/seed/fashion1-1/600/800",
      "https://picsum.photos/seed/fashion1-2/600/800",
      "https://picsum.photos/seed/fashion1-3/600/800"
    ],
    tags: ["Capsule", "Seta", "Cerimonia"]
  },
  {
    id: "c2",
    title: "Urban Earth",
    season: "Autunno/Inverno 2023",
    description: "Tonalità calde della terra e tessuti avvolgenti per la donna contemporanea che cerca comfort ed eleganza.",
    details: "Lana cotta, Velluto, Cotone organico.",
    image: "https://picsum.photos/seed/fashion2/800/1000",
    gallery: [
      "https://picsum.photos/seed/fashion2-1/600/800",
      "https://picsum.photos/seed/fashion2-2/600/800",
      "https://picsum.photos/seed/fashion2-3/600/800"
    ],
    tags: ["Stagionale", "Lana", "Daily"]
  },
  {
    id: "c3",
    title: "Re-Made Stories",
    season: "Edizione Limitata - Upcycling",
    description: "Pezzi unici creati recuperando tessuti vintage di alta qualità. Ogni capo racconta una storia diversa.",
    details: "Denim vintage, Pizzi antichi, Scarti sartoriali.",
    image: "https://picsum.photos/seed/fashion3/800/1000",
    gallery: [
      "https://picsum.photos/seed/fashion3-1/600/800",
      "https://picsum.photos/seed/fashion3-2/600/800",
      "https://picsum.photos/seed/fashion3-3/600/800"
    ],
    tags: ["Upcycling", "Pezzo Unico", "Sostenibile"]
  }
];

export const BESPOKE_STEPS: ServiceStep[] = [
  {
    number: "01",
    title: "Consulenza",
    description: "Incontriamo i tuoi desideri. Un caffè in atelier per discutere l'idea, l'occasione d'uso e le tue preferenze stilistiche."
  },
  {
    number: "02",
    title: "Progettazione",
    description: "Realizziamo il figurino e selezioniamo insieme i tessuti più adatti, toccando con mano la qualità delle materie prime."
  },
  {
    number: "03",
    title: "Creazione & Prova",
    description: "Taglio e confezione. Seguiranno le prove sartoriali per garantire che il capo vesta perfettamente la tua silhouette."
  },
  {
    number: "04",
    title: "Consegna",
    description: "Il tuo capo unico è pronto. Curato in ogni dettaglio, sostenibile e fatto apposta per te."
  }
];