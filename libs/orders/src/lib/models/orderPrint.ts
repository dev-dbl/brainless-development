import { Order } from "./order";
import { Packing } from "./packing";

export class OrderPrint {
  id?: string;
  order: Order;
  weight?: number;
  packing?: Packing;
}
