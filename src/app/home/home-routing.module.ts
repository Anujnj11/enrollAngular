import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EnrollComponent } from './enroll/enroll.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'HomeComponent'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
