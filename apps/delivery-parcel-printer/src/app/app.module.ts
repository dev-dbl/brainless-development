import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { UsersModule } from "@brainless-development/users";
// @ts-ignore
import { OrdersModule } from "@brainless-development/orders";
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [AppComponent, ShellComponent, DashboardComponent, OrdersListComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UsersModule,
    OrdersModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
