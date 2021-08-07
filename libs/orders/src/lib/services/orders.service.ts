import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Order } from "../models/order";
import { ORDERS_DUMMY } from "./orders.constants";

@Injectable({
  providedIn: "root"
})
export class OrdersService {

  constructor() {
  }

  getOrders(): Observable<Order[]> {
    return of(ORDERS_DUMMY);
  }

  getOrdersByIds(orderIds: string[]): Observable<Order[]> {
    return of (ORDERS_DUMMY.filter(o => orderIds.includes(o.id)));
  }

  updateOrderStatus(orders: Order[]): Observable<Order[]> {
      return of(orders);
  }
}
