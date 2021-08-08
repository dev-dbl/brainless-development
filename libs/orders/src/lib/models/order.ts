import { OrderItem } from "./orderItem";
import { OrderAddress } from "./orderAddress";

export class Order {
  id: string;
  orderName?: string;
  orderIdentifier: string;
  orderDate: Date;
  address?: string;
  status: number;
  amount: number;
  orderItem?: OrderItem;  // probably a list of orderItems
  orderAddress?: OrderAddress
}
