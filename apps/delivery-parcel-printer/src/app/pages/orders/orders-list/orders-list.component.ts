import { Component, OnDestroy, OnInit } from "@angular/core";
// @ts-ignore
import { Order, OrdersService } from "@brainless-development/orders";
import { Subscription } from "rxjs";
import { ORDER_STATUS } from "../../../../../../../libs/orders/src/lib/models/order.constants";

@Component({
  selector: 'dpp-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();

  orders: Order[] = [];
  orderStatus = ORDER_STATUS;
  orderStates: any[];
  selectedOrders: Order[] = [];

  constructor(private ordersService: OrdersService) {
    this.orderStates = [];
    for (const key in this.orderStatus) {
      this.orderStates.push(key);
    }
  }

  ngOnInit(): void {
    this._loadOrders();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private _loadOrders(): void {
    this.subs.add(this.ordersService.getOrders().subscribe((res: Order[]) => {
      this.orders = res;
    }));
  }

  refreshData(): void {
  }

  changeStatus(): void {
    this.selectedOrders.forEach(o => o.status++);
    this.subs.add(this.ordersService.updateOrderStatus(this.selectedOrders).subscribe((res: Order[]) => {
      this.selectedOrders = res;
    }));
  }
}
