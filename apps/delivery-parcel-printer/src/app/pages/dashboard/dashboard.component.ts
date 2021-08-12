import { Component, OnDestroy, OnInit } from "@angular/core";
// @ts-ignore
import { Order, OrdersService } from "@brainless-development/orders";
import { Subscription } from "rxjs";
// @ts-ignore
import { OrderStatisticsMode } from "@brainless-development/orders";

@Component({
  selector: 'dpp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();

  newOrdersCount = 0;
  payedOrdersCount = 0;
  shippedOrdersCount = 0;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this._loadStatistics();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  _loadStatistics(): void {
    this.subs.add(this.ordersService.getOrderStatistics(OrderStatisticsMode.NEW).subscribe((res: number) => {
      this.newOrdersCount = res;
    }));
    this.subs.add(this.ordersService.getOrderStatistics(OrderStatisticsMode.PAYED).subscribe((res: number) => {
      this.payedOrdersCount = res;
    }));
    this.subs.add(this.ordersService.getOrderStatistics(OrderStatisticsMode.SHIPPED).subscribe((res: number) => {
      this.shippedOrdersCount = res;
    }));
  }
}
