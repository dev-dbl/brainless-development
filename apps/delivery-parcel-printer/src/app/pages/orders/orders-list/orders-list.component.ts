import { Component, OnDestroy, OnInit } from "@angular/core";
// @ts-ignore
import { Order, OrdersService } from "@brainless-development/orders";
import { Subscription } from "rxjs";
import { ORDER_STATUS } from "../../../../../../../libs/orders/src/lib/models/order.constants";
import { NavigationExtras, Router } from "@angular/router";

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

  constructor(private router: Router, private ordersService: OrdersService) {
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

  navigatePrint(): void {
    const queryParams: any = {};
    queryParams.orderIds = JSON.stringify(this.selectedOrders.map(o => o.id));
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate([`orders/print`], navigationExtras);
  }
}
