import { OrderItem } from "./orderItem";

export class Order {
  id: string;
  orderName?: string;
  orderIdentifier: string;
  orderDate: Date;
  status: number;
  amount: number;
  orderItem?: OrderItem;
}
