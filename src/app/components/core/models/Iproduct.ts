export interface Iproduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  rate: number;
  categoryID: number;
  category: string;
 }
 interface PaginatedProduct{
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Iproduct[];
}
