import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { UsersModule } from "@brainless-development/users";
import { OrdersModule } from "@brainless-development/orders";

@NgModule({
  declarations: [AppComponent, ShellComponent, DashboardComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UsersModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
