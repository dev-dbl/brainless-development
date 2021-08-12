import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Order } from "../models/order";
import { ORDERS_DUMMY } from "../constants/orders.constants";
import { OrderStatisticsMode } from "../constants/orderStatisticsMode";

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
    return of(ORDERS_DUMMY.filter(o => orderIds.includes(o.id)));
  }

  getOrderStatistics(mode: OrderStatisticsMode): Observable<number> {
    switch (mode) {
      case OrderStatisticsMode.NEW:
        return of(10);
      case OrderStatisticsMode.PAYED:
        return of(5);
      case OrderStatisticsMode.SHIPPED:
        return of(3);
      default:
        return of(0);
        break;
    }
  }

  updateOrderStatus(orders: Order[]): Observable<Order[]> {
      return of(orders);
  }
}
