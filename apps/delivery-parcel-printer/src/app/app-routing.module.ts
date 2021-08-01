import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersListComponent } from "./pages/orders/orders-list/orders-list.component";

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: ShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'orders',
        component: OrdersListComponent
      }
      // {
      //   path: 'orders',
      //   component: OrdersListComponent
      // }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
