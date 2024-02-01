export interface Order {
  basketId: string;
  deliveryMethod: number;
  shippingAddress: ShippingAddress;
 }
 export interface ShippingAddress {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  street: string;
}
