export interface NavItem {
  label: string;
  path: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  gallery: string[];
  season: string;
  tags: string[];
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
}