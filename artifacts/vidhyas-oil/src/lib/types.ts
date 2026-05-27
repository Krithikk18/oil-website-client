export interface ProductSize {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "cooking" | "hair-body" | "medicinal";
  categoryLabel: string;
  description: string;
  shortDescription: string;
  sizes: ProductSize[];
  image: string;
  thumbnails: string[];
  benefits: string[];
  howToUse: string;
  storage: string;
  ingredients: string;
  featured: boolean;
}
