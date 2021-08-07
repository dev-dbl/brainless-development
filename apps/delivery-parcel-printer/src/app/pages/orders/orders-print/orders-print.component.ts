import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
// @ts-ignore
import { Order, OrdersService } from "@brainless-development/orders";

@Component({
  selector: 'dpp-orders-print',
  templateUrl: './orders-print.component.html',
  styleUrls: ['./orders-print.component.scss']
})
export class OrdersPrintComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();

  orders: Order[] = [];
  weight = 0;

  constructor(private activatedRoute: ActivatedRoute, private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    let orderIds: string[] = [];
    const ordersString = this.activatedRoute.snapshot.queryParamMap.get('orderIds');
    if (ordersString) {
      orderIds = JSON.parse(ordersString);
    }

    this._loadOrders(orderIds);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  private _loadOrders(orderIds: string[]) {
    this.subs.add(this.ordersService.getOrdersByIds(orderIds).subscribe((res: Order[]) => {
      this.orders = res;
    }));
  }

  printLabels(): void {
    console.log('print labels');
  }
}
