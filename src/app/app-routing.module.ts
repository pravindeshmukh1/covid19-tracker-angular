import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TotalcountComponent } from './component/totalcount/totalcount.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent,
  // },
  // {
  //   path: 'home',
  //   component: TotalcountComponent,
  // },
  {
    path: '',
    component: DashboardComponent,
    children: [
    // { path: '', component: TotalcountComponent },
      { path: 'home', component: TotalcountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
