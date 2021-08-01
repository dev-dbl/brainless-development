import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Order } from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    const orders: Order[] = [{
      id: '',
      orderName: '',
      orderIdentifier: '',
      orderDate: new Date(),
      amount: 0
    }];
    return of(orders);
  }
}
