export type Language = 'pt' | 'es' | 'en';

export type DietaryTag = 'gf' | 'vegan' | 'new';

export type CategoryId =
  | 'starters'
  | 'breakfast'
  | 'olive-tree'
  | 'drinks'
  | 'mains'
  | 'pizzas-salads'
  | 'desserts'
  | 'wines-bar'
  | 'togo';

export interface LocalizedText {
  pt: string;
  es: string;
  en: string;
}

export interface MenuItem {
  id: string;
  category: CategoryId;
  subcategory?: LocalizedText;
  name: LocalizedText;
  description?: LocalizedText;
  portionNote?: LocalizedText;
  priceArs: number;
  tags?: DietaryTag[];
  hasVeganOption?: boolean;
  veganSamePrice?: boolean;
  image?: string;
  highlight29th?: boolean;
  glutenFreeOptionNote?: boolean;
}

export interface CategoryMeta {
  id: CategoryId;
  title: LocalizedText;
  subtitle?: LocalizedText;
  intro?: LocalizedText;
  theme?: 'default' | 'olive';
  heroImage?: string;
}

export interface RondaItem {
  item: MenuItem;
  quantity: number;
  variant?: 'traditional' | 'vegan';
}
