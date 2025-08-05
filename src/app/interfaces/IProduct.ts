export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  categoryId: number;
  description?: string;
  categoryName?: string;
}
