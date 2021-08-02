import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Order } from "../models/order";

@Injectable({
  providedIn: "root"
})
export class OrdersService {

  constructor() {
  }

  getOrders(): Observable<Order[]> {
    const orders: Order[] = [
      {
        id: '1',
        orderName: 'Order1',
        orderIdentifier: '12345',
        orderDate: new Date(),
        status: 0,
        amount: 5.00,
        orderItem: {
          id: '1',
          name: 'something thats nice',
          amount: 1,
          image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEKsNLpjydDpg/company-logo_200_200/0/1570557688920?e=2159024400&v=beta&t=DyZzu4ggpBJzjU8zNxHHRcXJQpnz0Y2NAAOL4A0HveQ'
        }
      },
      {
        id: '2',
        orderName: 'Order2',
        orderIdentifier: '23456',
        orderDate: new Date(),
        status: 1,
        amount: 10.50,
        orderItem: {
          id: '2',
          name: 'something thats awesome',
          amount: 1,
          image: 'https://image.shutterstock.com/image-vector/awesome-fireworks-message-quote-sign-600w-718630882.jpgo'
        }
      }
    ];
    return of(orders);
  }

  updateOrderStatus(orders: Order[]): Observable<Order[]> {
      return of(orders);
  }
}
