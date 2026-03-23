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
    id: "c_africa",
    title: "Collezione Africa",
    season: "Capsule 2024",
    description: "Una capsule ispirata ai colori, alle texture e alla luce dell'Africa. Linee essenziali, tagli netti e dettagli artigianali per capi dal forte carattere.",
    details: "Cotone e lino naturali, stampe artigianali, finiture sartoriali.",
    image: "/images/Collezione%20Africa/Africa_09.jpg",
    gallery: [
      "/images/Collezione%20Africa/Africa_03.jpg",
      "/images/Collezione%20Africa/Africa_08.jpg",
      "/images/Collezione%20Africa/Africa_09.jpg"
    ],
    tags: ["Capsule", "Africa", "Stampe"]
  },
  {
    id: "c1",
    title: "Ethereal Bloom",
    season: "Primavera/Estate 2024",
    description: "Una collezione che celebra la rinascita della natura. Stratificazioni leggere, volumi eterei e trasparenze misurate disegnano silhouette ariose pensate per la luce dell'estate.",
    details: "Seta pura lavata, Lino biologico, Organza riciclata, impunture a contrasto.",
    image: "https://picsum.photos/seed/fashion1/800/1000",
    gallery: [
      "https://picsum.photos/seed/fashion1-1/600/800",
      "https://picsum.photos/seed/fashion1-2/700/900",
      "https://picsum.photos/seed/fashion1-3/500/700",
      "https://picsum.photos/seed/fashion1-4/800/900",
      "https://picsum.photos/seed/fashion1-5/600/700",
      "https://picsum.photos/seed/fashion1-6/900/1200"
    ],
    tags: ["Capsule", "Seta", "Cerimonia"]
  },
  {
    id: "c2",
    title: "Abbinamenti",
    season: "Autunno/Inverno 2023",
    description: "Tonalità calde della terra, superfici materiche e comfort avvolgente per la città d'inverno. La funzionalità incontra l'eleganza quotidiana.",
    details: "Lana cotta, Velluto millerighe, Cotone organico garzato, bottoni in corozo.",
    image: "/images/Abbinamenti/Abbinamenti_04.jpg",
    gallery: [
      "/images/Abbinamenti/Abbinamenti_01.jpg",
      "/images/Abbinamenti/Abbinamenti_02.jpg",
      "/images/Abbinamenti/Abbinamenti_03.jpg",
      "/images/Abbinamenti/Abbinamenti_04.jpg",
      "/images/Abbinamenti/Abbinamenti_05.jpg",
      "/images/Abbinamenti/Abbinamenti_06.jpg"
    ],
    tags: ["Stagionale", "Lana", "Daily"]
  },
  {
    id: "c3",
    title: "Re-Made Stories",
    season: "Edizione Limitata - Upcycling",
    description: "Pezzi unici nati dal recupero di tessuti vintage e giacenze nobili. Ogni creazione è irripetibile e porta con sé una memoria.",
    details: "Denim vintage, Pizzi antichi, Scarti sartoriali, rammendi visibili.",
    image: "https://picsum.photos/seed/fashion3/800/1000",
    gallery: [
      "https://picsum.photos/seed/fashion3-1/600/800",
      "https://picsum.photos/seed/fashion3-2/700/900",
      "https://picsum.photos/seed/fashion3-3/800/700",
      "https://picsum.photos/seed/fashion3-4/500/700",
      "https://picsum.photos/seed/fashion3-5/900/1200"
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
