import { Component, OnDestroy, OnInit } from "@angular/core";
// @ts-ignore
import { Order, OrdersService } from "@brainless-development/orders";
import { Subscription } from "rxjs";

@Component({
  selector: 'dpp-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();

  orders: Order[] = [];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this._loadOrders();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private _loadOrders() {
    this.subs.add(this.ordersService.getOrders().subscribe((res: Order[]) => {
      this.orders = res;
    }));
  }

}
