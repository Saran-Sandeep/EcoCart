export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  currency: string;
  category: string;
  subCategory?: string;
  imageUrls: string[];
  rating?: number;
  reviewCount?: number;
  stock: number;
  isFeatured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
