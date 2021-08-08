import { DEFAULT_CURRENCY_CODE, NgModule } from "@angular/core";
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
import { TagModule } from "primeng/tag";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OrdersPrintComponent } from './pages/orders/orders-print/orders-print.component';
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { FieldsetModule } from "primeng/fieldset";

@NgModule({
  declarations: [AppComponent, ShellComponent, DashboardComponent, OrdersListComponent, OrdersPrintComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    UsersModule,
    OrdersModule,
    CardModule,
    TableModule,
    TagModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    FieldsetModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
