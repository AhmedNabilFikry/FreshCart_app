export interface UserBasket {
  id: string;
  items: {
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    quantity: number;
    id: number;
  }[];
  paymentIntentId: string;
  clientSecret: string;
  deliveryMethodId: number;
  shippingCost: number;
}
