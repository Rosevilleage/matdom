export interface Restaurant {
  id: string;
  name: string;
  category: string;
  distanceText: string;
  priceLevel: string;
  rating: number;
  isOpen: boolean;
  image?: string;
  menuItems?: string[];
  isBookmarked?: boolean;
}

