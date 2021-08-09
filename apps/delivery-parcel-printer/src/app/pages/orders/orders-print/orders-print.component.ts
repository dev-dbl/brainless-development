import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
// @ts-ignore
import { Order, OrdersService, Packing } from "@brainless-development/orders";
// @ts-ignore
import { PackingsService } from "@brainless-development/orders";
import { OrderPrint } from "../../../../../../../libs/orders/src/lib/models/orderPrint";

@Component({
  selector: 'dpp-orders-print',
  templateUrl: './orders-print.component.html',
  styleUrls: ['./orders-print.component.scss']
})
export class OrdersPrintComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();

  orderPrints: OrderPrint[] = [];
  orders: Order[] = [];
  weight = 0;
  packings: Packing[] = [];
  selectedPacking: Packing;

  selectedWeights: any = {};
  selectedPackings: any = {};

  constructor(private activatedRoute: ActivatedRoute, private ordersService: OrdersService, private packingsService: PackingsService) {
  }

  ngOnInit(): void {
    let orderIds: string[] = [];
    const ordersString = this.activatedRoute.snapshot.queryParamMap.get('orderIds');
    if (ordersString) {
      orderIds = JSON.parse(ordersString);
    }

    this._loadOrders(orderIds);
    this._loadPackings();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  private _loadOrders(orderIds: string[]) {
    this.subs.add(this.ordersService.getOrdersByIds(orderIds).subscribe((res: Order[]) => {
      for (const order of res) {
        this.selectedWeights[order.id] = null;
        this.selectedPackings[order.id] = null;
      }

      for (const order of res) {
        this.orderPrints.push({ order: order });
      }

      this.orders = res;
    }));
  }

  private _loadPackings() {
    this.subs.add(this.packingsService.getPackings().subscribe((res: Packing[]) => {
      this.packings = res;
    }));
  }

  printLabels(): void {
    console.log('print labels');
    for (const orderPrint of this.orderPrints) {
      console.log(`${orderPrint.order.id} => ${orderPrint.weight} | ${orderPrint.packing?.name}`);
    }
  }
}
