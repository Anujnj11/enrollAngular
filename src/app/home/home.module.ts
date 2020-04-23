import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';



//Component
import { HomeComponent } from './home/home.component';
import { EnrollComponent } from './enroll/enroll.component';


const component = [HomeComponent, EnrollComponent]

@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule { }
